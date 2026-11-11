import { Directive, ElementRef, OnInit, OnDestroy, inject, input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>).nativeElement;
  private observer?: IntersectionObserver;

  /**
   * Tipo da animação:
   * 'fade-up' (padrão) | 'fade-down' | 'fade-in' | 'zoom-in' | 'fade-left' | 'fade-right'
   */
  readonly animation = input<
    'fade-up' | 'fade-down' | 'fade-in' | 'zoom-in' | 'fade-left' | 'fade-right',
    'fade-up' | 'fade-down' | 'fade-in' | 'zoom-in' | 'fade-left' | 'fade-right' | string
  >('fade-up', {
    alias: 'appScrollReveal',
    transform: (val: unknown) => {
      if (!val || typeof val !== 'string' || val === '') return 'fade-up';
      const valid = ['fade-up', 'fade-down', 'fade-in', 'zoom-in', 'fade-left', 'fade-right'];
      return (valid.includes(val) ? val : 'fade-up') as any;
    },
  });

  /**
   * Suporte também para passar animation explicitamente: [animation]="'fade-up'"
   */
  readonly animExplicit = input<string | undefined>(undefined, {
    alias: 'animation',
  });

  /**
   * Atraso em milissegundos para efeito stagger/cascata
   */
  readonly delay = input<number, number | string>(0, {
    alias: 'revealDelay',
    transform: (val: unknown) => (typeof val === 'number' ? val : Number(val) || 0),
  });

  /**
   * Suporte para [delay]="100"
   */
  readonly delayExplicit = input<number, number | string>(0, {
    alias: 'delay',
    transform: (val: unknown) => (typeof val === 'number' ? val : Number(val) || 0),
  });

  ngOnInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const animType = (this.animExplicit() || this.animation()) || 'fade-up';
    const delayMs = this.delayExplicit() || this.delay() || 0;

    // Configura o estado inicial invisível e com transição
    this.el.classList.add('reveal-base', `reveal-${animType}`);
    if (delayMs > 0) {
      this.el.style.transitionDelay = `${delayMs}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.classList.add('revealed');
            // Uma vez animado, não precisa observar mais
            this.observer?.unobserve(this.el);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1,
      }
    );

    this.observer.observe(this.el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
