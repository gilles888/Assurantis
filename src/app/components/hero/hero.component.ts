import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="relative bg-gradient-to-br from-assurantis-grayLighter to-white overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-assurantis-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-assurantis-red/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div class="container-custom relative z-10" [class]="paddingClass">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="animate-fade-in">
            <h1 class="text-display mb-6" [innerHTML]="title"></h1>
            <p class="text-xl text-assurantis-gray mb-8 leading-relaxed" [innerHTML]="subtitle"></p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a *ngIf="primaryCta" 
                 [routerLink]="primaryCta.link" 
                 class="btn-primary text-center">
                {{ primaryCta.text }}
              </a>
              <a *ngIf="secondaryCta" 
                 [routerLink]="secondaryCta.link" 
                 class="btn-secondary text-center">
                {{ secondaryCta.text }}
              </a>
            </div>

            <!-- Trust Badges -->
            <div *ngIf="showTrustBadges" class="mt-12 flex flex-wrap items-center gap-8">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl">✓</span>
                </div>
                <div>
                  <div class="font-semibold text-assurantis-grayDark">15+ ans</div>
                  <div class="text-sm text-assurantis-gray">d'expérience</div>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl">★</span>
                </div>
                <div>
                  <div class="font-semibold text-assurantis-grayDark">500+</div>
                  <div class="text-sm text-assurantis-gray">clients satisfaits</div>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl">🏆</span>
                </div>
                <div>
                  <div class="font-semibold text-assurantis-grayDark">Certifié FSMA</div>
                  <div class="text-sm text-assurantis-gray">Courtier agréé</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Image/Visual -->
          <div class="relative animate-slide-up hidden lg:block">
            <div class="relative">
              <div class="absolute inset-0 bg-assurantis-red/10 rounded-3xl blur-2xl"></div>
              <img [src]="imageSrc" 
                   [alt]="imageAlt" 
                   class="relative rounded-3xl shadow-soft-xl w-full h-auto object-cover"
                   loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AppHeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() imageSrc: string = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop';
  @Input() imageAlt: string = 'Hero image';
  @Input() primaryCta?: { text: string; link: string };
  @Input() secondaryCta?: { text: string; link: string };
  @Input() showTrustBadges: boolean = false;
  @Input() paddingClass: string = 'py-20 md:py-32';
}