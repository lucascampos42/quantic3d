import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lifestream } from '../../shared/lifestream';
import { InteractiveMap } from '../../shared/interactive-map';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Lifestream, InteractiveMap],
  templateUrl: './home.html',
})
export class Home {}
