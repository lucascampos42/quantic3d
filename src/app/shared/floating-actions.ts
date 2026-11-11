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

      <!-- WhatsApp Floating Button (Original Lovable style: Stream neon glow with message-circle) -->
      <a
        href="https://wa.me/5515981679823"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        class="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-stream text-primary-foreground glow-strong transition-transform hover:scale-105 active:scale-95"
      >
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
          class="size-6"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
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
