import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowRight, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <div class="card group cursor-pointer h-full flex flex-col">
      <!-- Icon -->
      <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mb-6
                  group-hover:bg-assurantis-red group-hover:scale-110 transition-all duration-300">
        <lucide-icon [img]="icon" [size]="32" 
                     class="text-assurantis-red group-hover:text-white transition-colors duration-300">
        </lucide-icon>
      </div>

      <!-- Content -->
      <h3 class="text-h3 mb-3 group-hover:text-assurantis-red transition-colors duration-300">
        {{ title }}
      </h3>
      <p class="text-assurantis-gray mb-6 leading-relaxed flex-grow">
        {{ description }}
      </p>

      <!-- Benefits List -->
      <ul *ngIf="benefits.length > 0" class="space-y-2 mb-6">
        <li *ngFor="let benefit of benefits" class="flex items-start space-x-2">
          <span class="text-assurantis-red mt-1 flex-shrink-0">✓</span>
          <span class="text-sm text-assurantis-grayDark">{{ benefit }}</span>
        </li>
      </ul>

      <!-- CTA -->
      <a [routerLink]="ctaLink" 
         class="inline-flex items-center space-x-2 text-assurantis-red font-semibold 
                group-hover:translate-x-2 transition-transform duration-300">
        <span>{{ ctaText }}</span>
        <lucide-icon [img]="ArrowRightIcon" [size]="20"></lucide-icon>
      </a>
    </div>
  `,
  styles: []
})
export class AppServiceCardComponent {
  readonly ArrowRightIcon = ArrowRight;

  @Input() icon!: LucideIconData;
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() benefits: string[] = [];
  @Input() ctaText: string = 'En savoir plus';
  @Input() ctaLink: string = '/devis';
}