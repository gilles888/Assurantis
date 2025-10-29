import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Menu, X, Phone } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" [class.bg-white]="isScrolled" [class.shadow-soft]="isScrolled" [class.bg-white/95]="!isScrolled" [class.backdrop-blur-sm]="!isScrolled">
    <div class="container-custom">
      <div class="flex items-center justify-between h-20">
        <a routerLink="/" class="flex items-center space-x-3 group">
          <div class="w-12 h-12 bg-assurantis-red rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-soft">
            <span class="text-white font-bold text-xl">A</span>
          </div>
          <div class="hidden sm:block">
            <div class="text-xl font-bold text-assurantis-grayDark">ASSURANTIS</div>
            <div class="text-xs text-assurantis-gray italic">your best partner</div>
          </div>
        </a>

        <div class="hidden lg:flex items-center space-x-8">
          <a routerLink="/" routerLinkActive="text-assurantis-red" [routerLinkActiveOptions]="{exact: true}" class="text-assurantis-grayDark hover:text-assurantis-red transition-colors duration-200 font-medium">Accueil</a>
          <a routerLink="/services" routerLinkActive="text-assurantis-red" class="text-assurantis-grayDark hover:text-assurantis-red transition-colors duration-200 font-medium">Nos Services</a>
          <a routerLink="/a-propos" routerLinkActive="text-assurantis-red" class="text-assurantis-grayDark hover:text-assurantis-red transition-colors duration-200 font-medium">À Propos</a>
          <a routerLink="/contact" routerLinkActive="text-assurantis-red" class="text-assurantis-grayDark hover:text-assurantis-red transition-colors duration-200 font-medium">Contact</a>
        </div>

        <div class="hidden lg:flex items-center space-x-4">
          <a href="tel:+32123456789" class="flex items-center space-x-2 text-assurantis-grayDark hover:text-assurantis-red transition-colors duration-200">
            <lucide-icon [img]="PhoneIcon" [size]="20"></lucide-icon>
            <span class="font-medium">+32 1 234 56 789</span>
          </a>
          <a routerLink="/devis" class="btn-primary">Demander un devis</a>
        </div>

        <button (click)="toggleMobileMenu()" class="lg:hidden p-2 text-assurantis-grayDark hover:text-assurantis-red transition-colors" [attr.aria-label]="mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'" [attr.aria-expanded]="mobileMenuOpen">
          <lucide-icon [img]="mobileMenuOpen ? XIcon : MenuIcon" [size]="28"></lucide-icon>
        </button>
      </div>
    </div>

    <div *ngIf="mobileMenuOpen" class="lg:hidden bg-white border-t border-assurantis-grayLight animate-fade-in">
      <div class="container-custom py-6 space-y-4">
        <a routerLink="/" (click)="closeMobileMenu()" routerLinkActive="text-assurantis-red bg-assurantis-grayLighter" [routerLinkActiveOptions]="{exact: true}" class="block px-4 py-3 rounded-xl hover:bg-assurantis-grayLighter transition-colors font-medium">Accueil</a>
        <a routerLink="/services" (click)="closeMobileMenu()" routerLinkActive="text-assurantis-red bg-assurantis-grayLighter" class="block px-4 py-3 rounded-xl hover:bg-assurantis-grayLighter transition-colors font-medium">Nos Services</a>
        <a routerLink="/a-propos" (click)="closeMobileMenu()" routerLinkActive="text-assurantis-red bg-assurantis-grayLighter" class="block px-4 py-3 rounded-xl hover:bg-assurantis-grayLighter transition-colors font-medium">À Propos</a>
        <a routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="text-assurantis-red bg-assurantis-grayLighter" class="block px-4 py-3 rounded-xl hover:bg-assurantis-grayLighter transition-colors font-medium">Contact</a>
        
        <div class="pt-4 border-t border-assurantis-grayLight space-y-3">
          <a href="tel:+32123456789" class="flex items-center space-x-2 px-4 py-3 text-assurantis-grayDark hover:text-assurantis-red">
            <lucide-icon [img]="PhoneIcon" [size]="20"></lucide-icon>
            <span class="font-medium">+32 1 234 56 789</span>
          </a>
          <a routerLink="/devis" (click)="closeMobileMenu()" class="block btn-primary text-center">Demander un devis</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="h-20"></div>`,
  styles: []
})
export class AppNavbarComponent {
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  readonly PhoneIcon = Phone;

  mobileMenuOpen = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}