import { Routes } from '@angular/router';
import { PRINTER_LINES } from './data/lines';

export const routes: Routes = [
  {
    path: '',
    title: 'Quantic 3D — Manutenção de Impressoras 3D em Sorocaba | Desde 1999',
    data: {
      description:
        'Assistência técnica em Sorocaba especializada em impressoras 3D Bambu Lab, Creality, Elegoo, Anycubic e resina. Mais de 26 anos em manutenção de eletrônicos, garantia de 180 dias.',
    },
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'contrato-empresas',
    title: 'Contrato de Manutenção de Impressoras 3D para Empresas | Quantic 3D',
    data: {
      description:
        'Contratos de manutenção preventiva e corretiva para farms de impressão 3D, escolas, makerspaces e indústrias. Prioridade, relatórios e SLA.',
    },
    loadComponent: () => import('./pages/empresas/empresas').then((m) => m.Empresas),
  },
  {
    path: 'contato',
    title: 'Como chegar e contato | Quantic 3D Sorocaba',
    data: {
      description:
        'Rua Antônio José Rogick, 257, Sorocaba/SP. Mapa, horários e orientações para levar sua impressora 3D até a Quantic 3D. WhatsApp (15) 98167-9823.',
    },
    loadComponent: () => import('./pages/contato/contato').then((m) => m.Contato),
  },
  ...PRINTER_LINES.map((line) => ({
    path: line.path.slice(1),
    title: line.title,
    data: { description: line.metaDescription, slug: line.slug },
    loadComponent: () => import('./pages/product/product').then((m) => m.ProductPage),
  })),
  { path: '**', redirectTo: '' },
];
