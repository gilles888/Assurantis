import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <footer class="bg-assurantis-grayDark text-white mt-auto">
      <!-- Main Footer -->
      <div class="container-custom py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Brand Column -->
          <div class="space-y-6">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-assurantis-red rounded-xl flex items-center justify-center shadow-red">
                <span class="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div class="text-xl font-bold">ASSURANTIS</div>
                <div class="text-sm text-assurantis-grayLight italic">your best partner</div>
              </div>
            </div>
            <p class="text-assurantis-grayLight text-sm leading-relaxed">
              Votre courtier en assurances de confiance. Indépendance, proximité et réactivité 
              pour tous vos besoins en protection.
            </p>
            <div class="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener" 
                 class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                        hover:bg-assurantis-red transition-all duration-300"
                 aria-label="Facebook">
                <lucide-icon [img]="FacebookIcon" [size]="20"></lucide-icon>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener"
                 class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                        hover:bg-assurantis-red transition-all duration-300"
                 aria-label="LinkedIn">
                <lucide-icon [img]="LinkedinIcon" [size]="20"></lucide-icon>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener"
                 class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center 
                        hover:bg-assurantis-red transition-all duration-300"
                 aria-label="Instagram">
                <lucide-icon [img]="InstagramIcon" [size]="20"></lucide-icon>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold mb-6">Liens Rapides</h3>
            <ul class="space-y-3">
              <li>
                <a routerLink="/" class="text-assurantis-grayLight hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a routerLink="/services" class="text-assurantis-grayLight hover:text-white transition-colors">
                  Nos Services
                </a>
              </li>
              <li>
                <a routerLink="/devis" class="text-assurantis-grayLight hover:text-white transition-colors">
                  Demander un Devis
                </a>
              </li>
              <li>
                <a routerLink="/sinistre" class="text-assurantis-grayLight hover:text-white transition-colors">
                  Déclarer un Sinistre
                </a>
              </li>
              <li>
                <a routerLink="/a-propos" class="text-assurantis-grayLight hover:text-white transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a routerLink="/contact" class="text-assurantis-grayLight hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h3 class="text-lg font-semibold mb-6">Nos Assurances</h3>
            <ul class="space-y-3">
              <li>
                <a routerLink="/services" fragment="auto" 
                   class="text-assurantis-grayLight hover:text-white transition-colors">
                  Assurance Auto
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="habitation"
                   class="text-assurantis-grayLight hover:text-white transition-colors">
                  Assurance Habitation
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="familiale"
                   class="text-assurantis-grayLight hover:text-white transition-colors">
                  RC Familiale
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="sante"
                   class="text-assurantis-grayLight hover:text-white transition-colors">
                  Assurance Santé
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="vie"
                   class="text-assurantis-grayLight hover:text-white transition-colors">
                  Assurance Vie
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="pro"
                   class="text-assurantis-grayLight hover:text-white transition-colors">
                  Assurance Professionnelle
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-6">Contact</h3>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3">
                <lucide-icon [img]="MapPinIcon" [size]="20" class="text-assurantis-red mt-0.5 flex-shrink-0"></lucide-icon>
                <span class="text-assurantis-grayLight text-sm">
                  Avenue Louise, 164<br>
                  1050 Ixelles, Belgique
                </span>
              </li>
              <li class="flex items-start space-x-3">
                <lucide-icon [img]="PhoneIcon" [size]="20" class="text-assurantis-red mt-0.5 flex-shrink-0"></lucide-icon>
                <a href="tel:+32477790383" class="text-assurantis-grayLight hover:text-white transition-colors text-sm">
                  +32 477 79 03 83
                </a>
              </li>
              <li class="flex items-start space-x-3">
                <lucide-icon [img]="MailIcon" [size]="20" class="text-assurantis-red mt-0.5 flex-shrink-0"></lucide-icon>
                <a href="mailto:info@assurantis.net" class="text-assurantis-grayLight hover:text-white transition-colors text-sm">
                  info&#64;assurantis.net
                </a>
              </li>
            </ul>
            <div class="mt-6 text-xs text-assurantis-grayLight">
              <p class="font-semibold">Horaires d'ouverture</p>
              <p class="mt-1">Lun - Ven: 9h00 - 18h00</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="border-t border-white/10">
        <div class="container-custom py-6">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-sm text-assurantis-grayLight">
              &copy; {{ currentYear }} ASSURANTIS. Tous droits réservés. | FSMA n° XXXX
            </p>
            <div class="flex flex-wrap justify-center gap-6 text-sm">
              <a routerLink="/politique-confidentialite" 
                 class="text-assurantis-grayLight hover:text-white transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" class="text-assurantis-grayLight hover:text-white transition-colors">
                Mentions Légales
              </a>
              <a href="#" class="text-assurantis-grayLight hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class AppFooterComponent {
  readonly MapPinIcon = MapPin;
  readonly PhoneIcon = Phone;
  readonly MailIcon = Mail;
  readonly FacebookIcon = Facebook;
  readonly LinkedinIcon = Linkedin;
  readonly InstagramIcon = Instagram;

  currentYear = new Date().getFullYear();
}