import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-interactive-map',
  imports: [],
  template: `
    <div class="relative h-full w-full min-h-[350px] lg:min-h-[480px] bg-card/60 flex items-center justify-center overflow-hidden">
      <!-- Loading Placeholder / Skeleton -->
      @if (!isLoaded()) {
        <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-deep/80 backdrop-blur-sm z-10 transition-opacity duration-500">
          <div class="relative grid size-12 place-items-center rounded-2xl border border-primary/40 bg-primary/10 glow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-6 text-primary animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
            </svg>
          </div>
          <p class="text-xs font-mono uppercase tracking-widest text-muted-foreground animate-pulse">
            Carregando mapa...
          </p>
        </div>
      }

      <iframe
        title="Mapa — Quantic 3D Assistência Técnica"
        [src]="safeMapUrl"
        class="h-full w-full min-h-[350px] lg:min-h-[480px] grayscale-[60%] invert-[90%] hue-rotate-180 border-0 transition-opacity duration-700"
        [class.opacity-0]="!isLoaded()"
        [class.opacity-100]="isLoaded()"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        (load)="onLoad()"
      ></iframe>
    </div>
  `,
})
export class InteractiveMap {
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly isLoaded = signal(false);
  protected readonly safeMapUrl: SafeResourceUrl;

  constructor() {
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps?q=Rua%20Ant%C3%B4nio%20Jos%C3%A9%20Rogick%2C%20257%20-%20Vila%20Trujillo%2C%20Sorocaba%20-%20SP%2C%2018060-290&output=embed'
    );
  }

  protected onLoad(): void {
    this.isLoaded.set(true);
  }
}
