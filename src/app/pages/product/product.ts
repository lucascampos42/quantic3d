import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lifestream } from '../../shared/lifestream';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { PRINTER_LINES } from '../../data/lines';
import { WhatsappLinkPipe } from '../../shared/whatsapp';

@Component({
  selector: 'app-product',
  imports: [RouterLink, Lifestream, ScrollRevealDirective, WhatsappLinkPipe],
  templateUrl: './product.html',
})
export class ProductPage {
  readonly slug = input.required<string>();
  protected readonly line = computed(() => PRINTER_LINES.find((line) => line.slug === this.slug()) ?? PRINTER_LINES[0]);
  protected readonly otherLines = computed(() => PRINTER_LINES.filter((line) => line.slug !== this.slug()));
  protected readonly open = signal<number | null>(null);

  protected toggle(index: number): void {
    this.open.update((current) => (current === index ? null : index));
  }
}
