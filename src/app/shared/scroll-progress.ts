import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  imports: [],
  template: `
    <div
      class="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        class="h-full bg-gradient-to-r from-stream via-stream-cyan to-stream transition-all duration-150 ease-out shadow-[0_0_8px_rgba(92,240,160,0.8)]"
        [style.width.%]="progress()"
      ></div>
    </div>
  `,
})
export class ScrollProgress {
  protected readonly progress = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    if (scrollHeight > 0) {
      const percentage = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
      this.progress.set(percentage);
    }
  }
}
