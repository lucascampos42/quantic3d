import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WhatsappLinkPipe } from '../whatsapp';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, WhatsappLinkPipe],
  templateUrl: './footer.html',
  host: {
    class: 'relative mt-24 border-t border-border/60 bg-deep/70 block',
  },
})
export class Footer {}
