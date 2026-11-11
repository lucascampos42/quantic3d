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
        class="group relative flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-108 hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] active:scale-95"
      >
        <!-- Pulse effect ring -->
        <span class="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 duration-1000"></span>

        <!-- Tooltip on hover (desktop) -->
        <span
          class="pointer-events-none absolute right-full mr-3.5 whitespace-nowrap rounded-xl bg-deep/95 border border-border/80 px-3 py-1.5 font-sans text-xs font-medium text-foreground opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1"
        >
          Falar no WhatsApp
        </span>

        <!-- WhatsApp official SVG icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-7"
        >
          <path
            d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
          ></path>
          <path
            d="M8.5 10a4.5 4.5 0 0 0 5.5 5.5l1.5-.5a1 1 0 0 1 1.1.2l1.4 1.4a1 1 0 0 1-.2 1.6 7 7 0 0 1-8.8-8.8 1 1 0 0 1 1.6-.2l1.4 1.4a1 1 0 0 1 .2 1.1z"
            fill="currentColor"
          ></path>
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
