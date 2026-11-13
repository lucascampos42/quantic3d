import { Component } from '@angular/core';
import { Lifestream } from '../../shared/lifestream';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { WhatsappLinkPipe } from '../../shared/whatsapp';

@Component({
  selector: 'app-empresas',
  imports: [Lifestream, ScrollRevealDirective, WhatsappLinkPipe],
  templateUrl: './empresas.html',
})
export class Empresas {}
