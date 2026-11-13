import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lifestream } from '../../shared/lifestream';
import { InteractiveMap } from '../../shared/interactive-map';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
import { CountUpDirective } from '../../shared/count-up.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Lifestream, InteractiveMap, ScrollRevealDirective, CountUpDirective],
  templateUrl: './home.html',
})
export class Home {}
