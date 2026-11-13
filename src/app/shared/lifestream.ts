import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  life: number;
  max: number;
  c: string;
  s: number;
}

@Directive({ selector: 'canvas[appLifestream]' })
export class Lifestream implements OnInit, OnDestroy {
  private readonly canvas = inject<ElementRef<HTMLCanvasElement>>(ElementRef).nativeElement;
  private frame = 0;
  private width = 0;
  private height = 0;
  private particles: Particle[] = [];
  private colors: string[] = [];

  ngOnInit(): void {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = getComputedStyle(document.documentElement);
    this.colors = [
      root.getPropertyValue('--stream').trim() || '#5cf0a0',
      root.getPropertyValue('--stream-cyan').trim() || '#5ce0f0',
    ];
    const mobile = window.matchMedia('(max-width: 768px), (hover: none)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2);
    const maxParticles = mobile ? 90 : 260;
    let running = false;
    let visible = true;

    const spawn = (initial = false): Particle => ({
      x: initial ? Math.random() * this.width : -20,
      y: Math.random() * this.height,
      life: 0,
      max: 200 + Math.random() * 260,
      c: this.colors[Math.random() < 0.65 ? 0 : 1] ?? '#5cf0a0',
      s: 0.6 + Math.random() * 1.6,
    });

    const resize = () => {
      const rect = this.canvas.getBoundingClientRect();
      // No mobile, a barra de endereço muda só a altura ao rolar: não recria as partículas por isso
      if (this.particles.length && rect.width === this.width && Math.abs(rect.height - this.height) < 120) return;
      this.width = rect.width;
      this.height = rect.height;
      this.canvas.width = this.width * dpr;
      this.canvas.height = this.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(maxParticles, (this.width * this.height) / 6500));
      this.particles = Array.from({ length: count }, () => spawn(true));
    };

    let t = 0;
    const tick = () => {
      t += 0.0035;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        const angle = Math.sin(p.x * 0.0028 + t * 2) * 0.9 + Math.cos(p.y * 0.0042 - t * 1.4) * 0.8 - 0.25;
        const nx = p.x + Math.cos(angle) * p.s * 1.6;
        const ny = p.y + Math.sin(angle) * p.s * 1.2;
        const alpha = Math.sin((p.life / p.max) * Math.PI);

        ctx.globalAlpha = alpha * 0.75;
        ctx.strokeStyle = p.c;
        ctx.lineWidth = p.s;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life++;
        if (p.life > p.max || p.x > this.width + 20 || p.y < -20 || p.y > this.height + 20) {
          this.particles[i] = spawn();
        }
      }

      ctx.globalAlpha = 1;
      if (running) this.frame = requestAnimationFrame(tick);
    };

    // Só anima quando o canvas está na tela e a aba está visível (economiza CPU/bateria)
    const update = () => {
      const shouldRun = !reduced && visible && document.visibilityState === 'visible';
      if (shouldRun && !running) {
        running = true;
        this.frame = requestAnimationFrame(tick);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(this.frame);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });

    resize();
    window.addEventListener('resize', resize);

    if (reduced) {
      for (let i = 0; i < 120; i++) tick();
    } else {
      observer.observe(this.canvas);
      document.addEventListener('visibilitychange', update);
      update();
    }

    this.cleanup = () => {
      running = false;
      cancelAnimationFrame(this.frame);
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
      window.removeEventListener('resize', resize);
    };
  }

  private cleanup = () => {};

  ngOnDestroy(): void {
    this.cleanup();
  }
}
