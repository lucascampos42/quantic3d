import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PRINTER_LINES } from '../../data/lines';
import { WhatsappLinkPipe } from '../whatsapp';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, WhatsappLinkPipe],
  templateUrl: './header.html',
  host: {
    class: 'fixed top-0 inset-x-0 z-50 block w-full',
  },
})
export class Header {
  protected readonly lines = PRINTER_LINES;
  protected readonly open = signal(false);
  protected readonly isScrolled = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }

  protected toggle(): void {
    this.open.update((value) => !value);
  }
}
