import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  host: {
    class: 'relative mt-24 border-t border-border/60 bg-deep/70 block',
  },
})
export class Footer {}
