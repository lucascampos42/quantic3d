import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-floating-actions',
  imports: [],
  template: `
    <div class="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <!-- Back to Top Button -->
      @if (showBackToTop()) {
        <button
          type="button"
          (click)="scrollToTop()"
          aria-label="Voltar ao topo"
          class="grid size-11 place-items-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:-translate-y-1 active:scale-95 cursor-pointer animate-rise"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-5"
          >
            <path d="m18 15-6-6-6 6"></path>
          </svg>
        </button>
      }

      <!-- WhatsApp Floating Button -->
      <a
        href="https://wa.me/5515981679823"
        target="_blank"
        rel="noreferrer"
        aria-label="Conversar no WhatsApp"
        class="group relative flex items-center justify-center size-13 sm:size-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(37,211,102,0.5)] active:scale-95"
      >
        <!-- Pulse effect ring (pulso discreto e contido, sem espalhar muito) -->
        <span class="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 pointer-events-none [animation-duration:2.5s]"></span>

        <!-- Tooltip on hover (desktop) -->
        <span
          class="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-deep/95 border border-border/80 px-2.5 py-1 font-sans text-xs font-medium text-foreground opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1"
        >
          Falar no WhatsApp
        </span>

        <!-- WhatsApp official detailed SVG icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-7 sm:size-7.5 drop-shadow-sm"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.48 0-2.93-.39-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.84 11.64c-.26-.13-1.55-.77-1.79-.86-.24-.09-.42-.13-.6.13-.18.26-.69.86-.84 1.04-.16.18-.31.2-.57.07-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.31-1.56-1.46-1.82-.16-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.16.17-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.46-.16 0-.34-.02-.53-.02-.18 0-.48.07-.73.34-.26.27-.99.97-.99 2.37 0 1.4 1.02 2.76 1.16 2.95.15.19 2.01 3.07 4.88 4.31.68.29 1.22.47 1.63.6.69.22 1.31.19 1.81.12.55-.08 1.55-.63 1.77-1.25.22-.61.22-1.14.15-1.25-.06-.11-.23-.18-.49-.31z"/>
        </svg>
      </a>
    </div>
  `,
})
export class FloatingActions {
  protected readonly showBackToTop = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.showBackToTop.set(window.scrollY > 350);
  }

  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
