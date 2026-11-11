import { Component } from '@angular/core';
import { Lifestream } from '../../shared/lifestream';
import { InteractiveMap } from '../../shared/interactive-map';

@Component({
  selector: 'app-contato',
  imports: [Lifestream, InteractiveMap],
  templateUrl: './contato.html',
})
export class Contato {}
