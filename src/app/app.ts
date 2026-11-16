import { Component, DOCUMENT, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { FloatingActions } from './shared/floating-actions';
import { ScrollProgress } from './shared/scroll-progress';
import { PRINTER_LINES, PrinterLine } from './data/lines';

const SITE_URL = 'https://quantic3d.com.br';
const ROUTE_SCHEMA_ID = 'route-jsonld';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FloatingActions, ScrollProgress],
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let current = this.route.firstChild;
      while (current?.firstChild) current = current.firstChild;
      const description: string | undefined = current?.snapshot.data['description'];
      const slug: string | undefined = current?.snapshot.data['slug'];
      const title = current?.snapshot.title;
      const path = this.router.url.split(/[?#]/)[0];
      const url = SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, ''));

      if (description) {
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ name: 'twitter:description', content: description });
      }
      if (title) {
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ name: 'twitter:title', content: title });
      }
      this.meta.updateTag({ property: 'og:url', content: url });
      this.setCanonical(url);
      this.updateRouteStructuredData(slug, url);
      window.scrollTo(0, 0);
    });
  }

  private setCanonical(url: string): void {
    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.rel = 'canonical';
      this.document.head.appendChild(link);
    }
    link.href = url;
  }

  private updateRouteStructuredData(slug: string | undefined, url: string): void {
    const existing = this.document.getElementById(ROUTE_SCHEMA_ID);
    if (existing) existing.remove();

    const line: PrinterLine | undefined = slug
      ? PRINTER_LINES.find((item) => item.slug === slug)
      : undefined;
    if (!line) return;

    const graph = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${url}#service`,
          name: line.name,
          description: line.metaDescription,
          url,
          serviceType: `Manutenção de impressora 3D ${line.shortName}`,
          provider: { '@id': `${SITE_URL}/#business` },
          areaServed: { '@type': 'City', name: 'Sorocaba' },
        },
        {
          '@type': 'FAQPage',
          '@id': `${url}#faq`,
          mainEntity: line.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a,
            },
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Início',
              item: `${SITE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: line.name,
              item: url,
            },
          ],
        },
      ],
    };

    const script = this.document.createElement('script');
    script.id = ROUTE_SCHEMA_ID;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(graph);
    this.document.head.appendChild(script);
  }
}
