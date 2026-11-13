import { Component, DOCUMENT, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { FloatingActions } from './shared/floating-actions';
import { ScrollProgress } from './shared/scroll-progress';

const SITE_URL = 'https://quantic3d.com.br';

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
      const title = current?.snapshot.title;
      const path = this.router.url.split(/[?#]/)[0];
      const url = SITE_URL + (path === '/' ? '/' : path.replace(/\/$/, ''));

      if (description) {
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({ property: 'og:description', content: description });
      }
      if (title) this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:url', content: url });
      this.setCanonical(url);
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
}
