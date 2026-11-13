export interface PrinterService {
  title: string;
  text: string;
}

export interface PrinterLine {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  title: string;
  metaDescription: string;
  headline: string;
  intro: string;
  image: string;
  models: string[];
  problems: string[];
  services: PrinterService[];
  faq: { q: string; a: string }[];
}

export const PRINTER_LINES: PrinterLine[] = [
  {
    slug: 'bambu-lab',
    path: '/manutencao-bambu-lab',
    name: 'Manutenção Bambu Lab',
    shortName: 'Bambu Lab',
    title: 'Manutenção Bambu Lab em Sorocaba — X1C, P1S, A1 | Quantic 3D',
    metaDescription:
      'Assistência técnica especializada em impressoras Bambu Lab: X1 Carbon, P1P, P1S, A1, A1 mini e AMS. Diagnóstico preciso, peças de qualidade e garantia.',
    headline: 'Sua Bambu Lab de volta à velocidade máxima.',
    intro:
      'Impressoras Bambu Lab são rápidas e sofisticadas — e exigem um técnico que entenda sensores, firmware e o sistema AMS. Fazemos diagnóstico completo, calibração e reparos com peças de qualidade.',
    image: '/assets/printer-bambu-DGzYttBf.webp',
    models: ['X1 Carbon', 'X1E', 'P1P', 'P1S', 'A1', 'A1 mini', 'H2D', 'AMS / AMS Lite'],
    problems: [
      'Entupimento de hotend e extrusor',
      'Falhas de alimentação no AMS',
      'Erros de sensor e calibração automática',
      'Problemas de aderência e nivelamento da mesa',
      'Ruídos, vibrações e correias frouxas',
      'Falhas de firmware e conectividade',
    ],
    services: [
      { title: 'Troca de hotend e bico', text: 'Substituição completa do conjunto, com teste de temperatura e fluxo.' },
      { title: 'Revisão do AMS', text: 'Limpeza, ajuste de engrenagens, sensores e tubos PTFE.' },
      { title: 'Calibração completa', text: 'Lidar, nivelamento, compensação de vibração e fluxo.' },
      { title: 'Manutenção preventiva', text: 'Limpeza, lubrificação de eixos e revisão de correias.' },
    ],
    faq: [
      {
        q: 'Vocês atendem Bambu Lab fora da garantia?',
        a: 'Sim. Atendemos equipamentos dentro e fora da garantia do fabricante, sempre com orçamento prévio.',
      },
      {
        q: 'Quanto tempo leva o diagnóstico?',
        a: 'O diagnóstico leva de 10 a 56 horas úteis. Depois disso enviamos o orçamento e o prazo do reparo, que depende da disponibilidade de peças.',
      },
      {
        q: 'Preciso levar o AMS junto?',
        a: 'Se o problema envolve alimentação de filamento, sim — assim testamos o conjunto completo.',
      },
    ],
  },
  {
    slug: 'creality',
    path: '/manutencao-creality',
    name: 'Manutenção Creality',
    shortName: 'Creality',
    title: 'Manutenção Creality em Sorocaba — Ender, K1, K2 | Quantic 3D',
    metaDescription:
      'Conserto e manutenção de impressoras Creality: Ender 3, Ender 5, K1, K1 Max, K2 Plus e CR-10. Upgrades, calibração e troca de placas.',
    headline: 'Ender, K1 ou CR-10: imprimindo como nova.',
    intro:
      'Somos especialistas na linha Creality, das clássicas Ender às rápidas K1 e K2. Resolvemos desde problemas mecânicos até placas, drivers e firmware — e também fazemos upgrades.',
    image: '/assets/printer-creality-D54mHevI.webp',
    models: ['Ender 3 / V2 / V3 / S1', 'Ender 5', 'K1 / K1C / K1 Max', 'K2 Plus', 'CR-10', 'CR-M4', 'Halot (resina)'],
    problems: [
      'Camadas desalinhadas e perda de passos',
      'Bico entupido e extrusão irregular',
      'Mesa empenada ou sem nivelamento',
      'Placa-mãe queimada ou drivers com defeito',
      'Termistor e aquecimento com erro',
      'Firmware corrompido ou desatualizado',
    ],
    services: [
      { title: 'Reparo eletrônico', text: 'Troca e reparo de placas, drivers, fontes e cabeamento.' },
      { title: 'Upgrades', text: 'Extrusora direta, nivelamento automático, mesa PEI e firmware Klipper.' },
      { title: 'Alinhamento mecânico', text: 'Esquadro do pórtico, rodas excêntricas, eixos e correias.' },
      { title: 'Hotend completo', text: 'Troca de bico, heatbreak, bloco aquecedor e PTFE.' },
    ],
    faq: [
      {
        q: 'Vale a pena consertar uma Ender 3 antiga?',
        a: 'Na maioria dos casos sim — com alguns upgrades ela imprime melhor que muitas impressoras novas.',
      },
      { q: 'Vocês instalam Klipper?', a: 'Sim, instalamos e configuramos Klipper em modelos compatíveis, com calibração completa.' },
      { q: 'Qual a garantia do serviço?', a: 'Todos os nossos serviços têm garantia de 180 dias.' },
    ],
  },
  {
    slug: 'elegoo',
    path: '/manutencao-elegoo',
    name: 'Manutenção Elegoo',
    shortName: 'Elegoo',
    title: 'Manutenção Elegoo em Sorocaba — Neptune, Saturn | Quantic 3D',
    metaDescription:
      'Assistência técnica para impressoras Elegoo: Neptune 3 e 4, Centauri Carbon, Saturn e Mars. Reparos FDM e resina com garantia.',
    headline: 'Elegoo calibrada, precisa e confiável.',
    intro:
      'Atendemos toda a linha Elegoo — FDM (Neptune, Centauri Carbon) e resina (Saturn, Mars). Diagnóstico técnico detalhado e reparo com teste de impressão antes da entrega.',
    image: '/assets/printer-elegoo-3ksDhL1I.webp',
    models: [
      'Neptune 3 / Pro / Plus / Max',
      'Neptune 4 / Pro / Plus / Max',
      'Centauri Carbon',
      'Saturn 2 / 3 / 4',
      'Mars 3 / 4 / 5',
    ],
    problems: [
      'Erro de nivelamento automático',
      'Extrusão falhando no meio da impressão',
      'Ventoinhas ruidosas ou paradas',
      'Tela LCD de resina com manchas ou sem imagem',
      'Eixo Z travando ou com folga',
      'Falhas de comunicação e firmware',
    ],
    services: [
      { title: 'Manutenção FDM', text: 'Hotend, extrusora, mesa, ventilação e calibração completa.' },
      { title: 'Troca de LCD (resina)', text: 'Substituição da tela monocromática e teste de exposição.' },
      { title: 'Ajuste do eixo Z', text: 'Fuso, acoplamento, guias lineares e nivelamento da plataforma.' },
      { title: 'Atualização de firmware', text: 'Instalação segura e configuração dos parâmetros ideais.' },
    ],
    faq: [
      { q: 'Vocês atendem Elegoo de resina também?', a: 'Sim. Temos bancada separada e preparada para impressoras de resina.' },
      { q: 'A Centauri Carbon tem manutenção?', a: 'Sim, atendemos o modelo com revisão do sistema CoreXY, hotend e calibração.' },
      { q: 'Fazem orçamento antes?', a: 'Sempre. Nenhum serviço é executado sem sua aprovação.' },
    ],
  },
  {
    slug: 'anycubic',
    path: '/manutencao-anycubic',
    name: 'Manutenção Anycubic',
    shortName: 'Anycubic',
    title: 'Manutenção Anycubic em Sorocaba — Kobra, Photon | Quantic 3D',
    metaDescription:
      'Conserto de impressoras Anycubic: Kobra 2, Kobra 3 Combo, Kobra S1, Vyper e Photon Mono. Diagnóstico, peças e calibração profissional.',
    headline: 'Anycubic funcionando do primeiro ao último layer.',
    intro:
      'Da Kobra com ACE Pro às Photon de resina, cuidamos da sua Anycubic com diagnóstico preciso, peças de qualidade e testes reais de impressão antes de devolver.',
    image: '/assets/printer-anycubic-DCv6teta.webp',
    models: ['Kobra 2 / Neo / Pro / Max', 'Kobra 3 / Combo', 'Kobra S1', 'Vyper', 'Photon Mono / M5s / M7'],
    problems: [
      'Falhas na unidade multicolor ACE Pro',
      'Nivelamento LeviQ com erro',
      'Bico entupido e filamento moído',
      'Mesa não aquece ou aquece irregular',
      'Telas de resina com falhas',
      'Ruídos e vibrações excessivas',
    ],
    services: [
      { title: 'Revisão ACE Pro', text: 'Limpeza, ajuste de alimentação, secagem e sensores.' },
      { title: 'Calibração LeviQ', text: 'Sensor de nivelamento, offset Z e compensação de malha.' },
      { title: 'Hotend e extrusora', text: 'Troca de bico, engrenagens e revisão de tensão.' },
      { title: 'Reparo de resina', text: 'LCD, matriz UV, plataforma e eixo Z das linhas Photon.' },
    ],
    faq: [
      { q: 'Atendem a Kobra 3 Combo?', a: 'Sim, incluindo a unidade ACE Pro e os problemas de troca de filamento.' },
      { q: 'Tem garantia no serviço?', a: 'Sim, todos os nossos serviços têm garantia de 180 dias.' },
      {
        q: 'Quando posso entregar e retirar a impressora?',
        a: 'A entrega e a retirada de equipamentos acontecem de segunda a sexta, das 9h às 17h.',
      },
    ],
  },
  {
    slug: 'resina',
    path: '/manutencao-impressoras-resina',
    name: 'Manutenção Impressoras de Resina',
    shortName: 'Resina',
    title: 'Manutenção de Impressoras de Resina em Sorocaba | Quantic 3D',
    metaDescription:
      'Manutenção de impressoras 3D de resina: troca de LCD, FEP, matriz UV, eixo Z e plataforma. Elegoo, Anycubic, Creality Halot, Phrozen e mais.',
    headline: 'Precisão de resina, cuidado de laboratório.',
    intro:
      'Impressoras de resina exigem limpeza técnica, manuseio seguro e peças compatíveis. Nossa bancada dedicada cuida de telas LCD, fontes UV, filmes FEP e mecânica do eixo Z.',
    image: '/assets/printer-resin-lab-8YsjAlob.webp',
    models: [
      'Elegoo Saturn / Mars',
      'Anycubic Photon',
      'Creality Halot',
      'Phrozen Sonic',
      'Uniformation GKtwo',
      'Outras MSLA / SLA',
    ],
    problems: [
      'Peças não aderem à plataforma',
      'Tela LCD com manchas, linhas ou sem imagem',
      'Vazamento de resina na base',
      'Matriz UV fraca ou com falhas',
      'Eixo Z com folga ou travando',
      'Camadas deslocadas e marcas de linha',
    ],
    services: [
      { title: 'Troca de LCD', text: 'Telas monocromáticas 2K a 16K, com teste de exposição.' },
      { title: 'Limpeza de vazamento', text: 'Descontaminação da base, eletrônica e vedação.' },
      { title: 'FEP / nFEP / ACF', text: 'Troca do filme do tanque e ajuste de tensão.' },
      { title: 'Matriz UV e eixo Z', text: 'Revisão da fonte de luz, fuso, guias e plataforma.' },
    ],
    faq: [
      {
        q: 'Minha impressora vazou resina na tela, tem conserto?',
        a: 'Na maioria dos casos sim. Fazemos a descontaminação e avaliamos se a tela precisa ser trocada.',
      },
      {
        q: 'Preciso esvaziar o tanque antes de levar?',
        a: 'Sim, por segurança retire a resina e embale o tanque separado. Se precisar, orientamos pelo WhatsApp.',
      },
      {
        q: 'Quanto tempo leva o diagnóstico?',
        a: 'De 10 a 56 horas úteis. Em seguida enviamos o orçamento para sua aprovação.',
      },
    ],
  },
];
