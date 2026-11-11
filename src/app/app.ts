import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { FloatingActions } from './shared/floating-actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FloatingActions],
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly meta = inject(Meta);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let current = this.route.firstChild;
      while (current?.firstChild) current = current.firstChild;
      const description = current?.snapshot.data['description'];
      if (description) this.meta.updateTag({ name: 'description', content: description });
      window.scrollTo(0, 0);
    });
  }
}
