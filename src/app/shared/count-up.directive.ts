import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Anima um número de 0 até `appCountUp` quando o elemento entra na tela.
 * O texto final fica no HTML (SSR / sem JS mostram o valor correto).
 * Uso: <div [appCountUp]="180" suffix="+">180+</div>
 */
@Directive({
  selector: '[appCountUp]',
})
export class CountUpDirective implements OnInit, OnDestroy {
  private readonly el: HTMLElement = inject(ElementRef<HTMLElement>).nativeElement;
  private observer?: IntersectionObserver;
  private frame = 0;

  readonly target = input.required<number>({ alias: 'appCountUp' });
  readonly suffix = input<string>('');
  readonly duration = input<number>(1800);

  ngOnInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    this.render(0);

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.observer?.disconnect();
          this.start();
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.el);
  }

  private start(): void {
    const total = this.target();
    const duration = this.duration();
    const t0 = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      this.render(Math.round(total * eased));
      if (p < 1) this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
  }

  private render(value: number): void {
    this.el.textContent = `${value}${this.suffix()}`;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.frame);
  }
}
