import { Component } from '@angular/core';
import { Lifestream } from '../../shared/lifestream';
import { InteractiveMap } from '../../shared/interactive-map';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-contato',
  imports: [Lifestream, InteractiveMap, ScrollRevealDirective],
  templateUrl: './contato.html',
})
export class Contato {}
