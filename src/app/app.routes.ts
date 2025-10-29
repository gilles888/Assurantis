import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'ASSURANTIS - Your Best Partner | Courtier en Assurances'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Nos Services | ASSURANTIS'
  },
  {
    path: 'devis',
    loadComponent: () => import('./pages/quote/quote.component').then(m => m.QuoteComponent),
    title: 'Demander un Devis | ASSURANTIS'
  },
  {
    path: 'sinistre',
    loadComponent: () => import('./pages/claim/claim.component').then(m => m.ClaimComponent),
    title: 'Déclarer un Sinistre | ASSURANTIS'
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'À Propos | ASSURANTIS'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | ASSURANTIS'
  },
  {
    path: 'styleguide',
    loadComponent: () => import('./pages/styleguide/styleguide.component').then(m => m.StyleguideComponent),
    title: 'Style Guide | ASSURANTIS'
  },
  {
    path: 'politique-confidentialite',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
    title: 'Politique de Confidentialité | ASSURANTIS'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];