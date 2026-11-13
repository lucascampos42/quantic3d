import { Pipe, PipeTransform } from '@angular/core';

/** Número do WhatsApp da Quantic 3D (formato internacional, só dígitos). */
export const WHATSAPP_NUMBER = '5515981679823';

export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Vim pelo site da Quantic 3D e gostaria de um orçamento para minha impressora 3D.';

/** Monta o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Uso no template: [href]="'Mensagem' | waLink"  ou  [href]="'' | waLink" (mensagem padrão). */
@Pipe({ name: 'waLink' })
export class WhatsappLinkPipe implements PipeTransform {
  transform(message?: string | null): string {
    return whatsappLink(message || undefined);
  }
}
