import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lifestream } from '../../shared/lifestream';
import { InteractiveMap } from '../../shared/interactive-map';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { CountUpDirective } from '../../shared/count-up.directive';
import { WhatsappLinkPipe } from '../../shared/whatsapp';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Lifestream, InteractiveMap, ScrollRevealDirective, CountUpDirective, WhatsappLinkPipe],
  templateUrl: './home.html',
})
export class Home {}
