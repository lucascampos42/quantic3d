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
        class="group relative flex items-center justify-center size-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-108 hover:shadow-[0_6px_22px_rgba(37,211,102,0.55)] active:scale-95"
      >
        <!-- Pulse effect ring -->
        <span class="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping -z-10 pointer-events-none [animation-duration:2.5s]"></span>

        <!-- Tooltip on hover (desktop) -->
        <span
          class="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-deep/95 border border-border/80 px-3 py-1.5 font-sans text-xs font-medium text-foreground opacity-0 shadow-xl backdrop-blur-xl transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1"
        >
          Falar no WhatsApp
        </span>

        <!-- WhatsApp Official Logo: Green bubble backdrop with white handset -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          class="size-8"
        >
          <path
            fill="#ffffff"
            d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16c0 2.61.737 5.05 2.012 7.126L3.06 28.94l6.02-1.428A13.43 13.43 0 0 0 16 29.5c7.456 0 13.5-6.044 13.5-13.5S23.456 2.5 16 2.5zm0 2.274c6.2 0 11.226 5.026 11.226 11.226S22.2 27.226 16 27.226c-2.144 0-4.14-.6-5.83-1.644l-.417-.258-4.324 1.026 1.05-4.2-.275-.436A11.17 11.17 0 0 1 4.774 16C4.774 9.8 9.8 4.774 16 4.774zm-4.708 5.485c-.258 0-.674.097-1.026.48-.352.384-1.344 1.313-1.344 3.202s1.376 3.714 1.568 3.97c.192.257 2.656 4.237 6.557 5.76 3.24 1.266 3.9.845 4.604.78.704-.064 2.272-.93 2.592-1.825.32-.897.32-1.666.224-1.826-.096-.16-.352-.256-.736-.448-.384-.192-2.272-1.12-2.624-1.248-.352-.128-.608-.192-.864.192-.256.384-.992 1.248-1.216 1.504-.224.256-.448.288-.832.096-.384-.192-1.62-.598-3.086-1.905-1.141-1.018-1.912-2.277-2.136-2.66-.224-.385-.024-.593.168-.784.174-.173.384-.448.576-.672.192-.224.256-.384.384-.64.128-.256.064-.48-.032-.672-.096-.192-.843-2.079-1.183-2.825-.33-.726-.667-.621-.916-.633-.237-.012-.51-.014-.783-.014z"
          />
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
