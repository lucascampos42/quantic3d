import { WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_NUMBER, WhatsappLinkPipe, whatsappLink } from './whatsapp';

describe('whatsappLink', () => {
  it('usa a mensagem padrão quando nenhuma é informada', () => {
    expect(whatsappLink()).toBe(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`
    );
  });

  it('codifica acentos e caracteres especiais', () => {
    const url = whatsappLink('Olá! Manutenção / Farm & Indústria?');
    expect(url).toContain('?text=Ol%C3%A1!%20Manuten%C3%A7%C3%A3o%20%2F%20Farm%20%26%20Ind%C3%BAstria%3F');
  });

  it('pipe cai na mensagem padrão com string vazia', () => {
    expect(new WhatsappLinkPipe().transform('')).toBe(whatsappLink());
  });
});
