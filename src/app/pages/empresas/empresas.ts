import { Component } from '@angular/core';
import { Lifestream } from '../../shared/lifestream';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-empresas',
  imports: [Lifestream, ScrollRevealDirective],
  templateUrl: './empresas.html',
})
export class Empresas {}
