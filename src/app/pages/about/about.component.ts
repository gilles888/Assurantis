import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Target, Award, Users, Heart, Shield, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <!-- Hero -->
    <section class="bg-gradient-to-br from-assurantis-grayLighter to-white py-20">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-display mb-6">À propos d'<span class="text-assurantis-red">ASSURANTIS</span></h1>
            <p class="text-xl text-assurantis-gray leading-relaxed mb-6">
              Depuis plus de 15 ans, nous accompagnons particuliers et professionnels dans la protection 
              de ce qui compte vraiment pour eux.
            </p>
            <p class="text-lg text-assurantis-gray leading-relaxed">
              En tant que courtier indépendant, nous mettons notre expertise au service de vos besoins 
              pour vous proposer les meilleures solutions d'assurance du marché belge.
            </p>
          </div>
          <div class="rounded-3xl overflow-hidden shadow-soft-xl">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop" 
                 alt="Bureau ASSURANTIS" 
                 class="w-full h-full object-cover"
                 loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-h1 mb-4">Notre Mission & Valeurs</h2>
          <p class="text-xl text-assurantis-gray max-w-2xl mx-auto">
            Ce qui guide notre action au quotidien
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Mission -->
          <div class="card text-center">
            <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <lucide-icon [img]="TargetIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
            </div>
            <h3 class="text-h3 mb-4">Notre Mission</h3>
            <p class="text-assurantis-gray leading-relaxed">
              Offrir une protection optimale et personnalisée à chacun de nos clients en comparant 
              objectivement les meilleures offres du marché.
            </p>
          </div>

          <!-- Independence -->
          <div class="card text-center">
            <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <lucide-icon [img]="AwardIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
            </div>
            <h3 class="text-h3 mb-4">Indépendance</h3>
            <p class="text-assurantis-gray leading-relaxed">
              Notre indépendance nous permet de comparer librement et de recommander les solutions 
              qui servent vraiment vos intérêts.
            </p>
          </div>

          <!-- Expertise -->
          <div class="card text-center">
            <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <lucide-icon [img]="UsersIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
            </div>
            <h3 class="text-h3 mb-4">Expertise</h3>
            <p class="text-assurantis-gray leading-relaxed">
              Une équipe de professionnels certifiés avec plus de 15 ans d'expérience dans le secteur 
              de l'assurance en Belgique.
            </p>
          </div>

          <!-- Trust -->
          <div class="card text-center">
            <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <lucide-icon [img]="HeartIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
            </div>
            <h3 class="text-h3 mb-4">Confiance</h3>
            <p class="text-assurantis-gray leading-relaxed">
              Nous construisons des relations durables basées sur la transparence, l'écoute et 
              le respect de vos besoins.
            </p>
          </div>

          <!-- Quality -->
          <div class="card text-center">
            <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <lucide-icon [img]="ShieldIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
            </div>
            <h3 class="text-h3 mb-4">Qualité</h3>
            <p class="text-assurantis-gray leading-relaxed">
              Nous sélectionnons rigoureusement nos partenaires assureurs pour garantir la meilleure 
              qualité de service et de couverture.
            </p>
          </div>

          <!-- Innovation -->
          <div class="card text-center">
            <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <lucide-icon [img]="TrendingUpIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
            </div>
            <h3 class="text-h3 mb-4">Innovation</h3>
            <p class="text-assurantis-gray leading-relaxed">
              Nous intégrons les dernières technologies pour vous offrir des services toujours plus 
              rapides et efficaces.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section-padding bg-assurantis-grayLighter">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-h1 mb-4">Notre Équipe</h2>
          <p class="text-xl text-assurantis-gray max-w-2xl mx-auto">
            Des professionnels passionnés à votre service
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Team Member 1 -->
          <div class="card text-center">
            <div class="w-32 h-32 bg-assurantis-grayLight rounded-full mx-auto mb-6 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center text-4xl font-bold text-assurantis-red">
                JD
              </div>
            </div>
            <h3 class="text-h4 mb-2">Jean Dupont</h3>
            <p class="text-assurantis-red font-medium mb-3">Directeur & Fondateur</p>
            <p class="text-sm text-assurantis-gray leading-relaxed">
              20 ans d'expérience dans le courtage d'assurances. Passionné par la satisfaction client 
              et l'excellence du service.
            </p>
          </div>

          <!-- Team Member 2 -->
          <div class="card text-center">
            <div class="w-32 h-32 bg-assurantis-grayLight rounded-full mx-auto mb-6 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center text-4xl font-bold text-assurantis-red">
                ML
              </div>
            </div>
            <h3 class="text-h4 mb-2">Marie Lambert</h3>
            <p class="text-assurantis-red font-medium mb-3">Courtière Senior</p>
            <p class="text-sm text-assurantis-gray leading-relaxed">
              Spécialiste en assurances vie et santé. 15 ans d'expérience dans l'accompagnement 
              des particuliers.
            </p>
          </div>

          <!-- Team Member 3 -->
          <div class="card text-center">
            <div class="w-32 h-32 bg-assurantis-grayLight rounded-full mx-auto mb-6 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center text-4xl font-bold text-assurantis-red">
                PD
              </div>
            </div>
            <h3 class="text-h4 mb-2">Pierre Dubois</h3>
            <p class="text-assurantis-red font-medium mb-3">Courtier Entreprises</p>
            <p class="text-sm text-assurantis-gray leading-relaxed">
              Expert en assurances professionnelles et cyber-risques. Accompagne les PME et 
              indépendants depuis 12 ans.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications & Stats -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Certifications -->
          <div>
            <h2 class="text-h2 mb-6">Certifications & Agréments</h2>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">✓</span>
                </div>
                <div>
                  <h3 class="font-semibold text-assurantis-grayDark mb-1">Courtier inscrit à la FSMA</h3>
                  <p class="text-sm text-assurantis-gray">
                    Numéro d'agrément FSMA : XXXX-XXXX-XXXX
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">✓</span>
                </div>
                <div>
                  <h3 class="font-semibold text-assurantis-grayDark mb-1">Assurance RC Professionnelle</h3>
                  <p class="text-sm text-assurantis-gray">
                    Couverture complète pour toutes nos activités de courtage
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">✓</span>
                </div>
                <div>
                  <h3 class="font-semibold text-assurantis-grayDark mb-1">Formation continue certifiée</h3>
                  <p class="text-sm text-assurantis-gray">
                    Toute notre équipe suit des formations régulières pour rester à la pointe
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="text-2xl">✓</span>
                </div>
                <div>
                  <h3 class="font-semibold text-assurantis-grayDark mb-1">Conformité RGPD</h3>
                  <p class="text-sm text-assurantis-gray">
                    Protection totale de vos données personnelles selon les normes européennes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-6">
            <div class="card text-center">
              <div class="text-5xl font-bold text-assurantis-red mb-2">15+</div>
              <p class="text-assurantis-gray font-medium">Années d'expérience</p>
            </div>
            <div class="card text-center">
              <div class="text-5xl font-bold text-assurantis-red mb-2">500+</div>
              <p class="text-assurantis-gray font-medium">Clients satisfaits</p>
            </div>
            <div class="card text-center">
              <div class="text-5xl font-bold text-assurantis-red mb-2">20+</div>
              <p class="text-assurantis-gray font-medium">Partenaires assureurs</p>
            </div>
            <div class="card text-center">
              <div class="text-5xl font-bold text-assurantis-red mb-2">98%</div>
              <p class="text-assurantis-gray font-medium">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-padding bg-gradient-to-br from-assurantis-red to-assurantis-redDark text-white">
      <div class="container-custom text-center">
        <h2 class="text-h1 mb-6">Rejoignez nos clients satisfaits</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Faites confiance à un courtier expérimenté pour trouver les meilleures solutions d'assurance
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/devis" 
             class="bg-white text-assurantis-red px-8 py-4 rounded-xl font-semibold 
                    hover:bg-assurantis-grayLight transition-all duration-300 shadow-soft-lg">
            Demander un devis
          </a>
          <a routerLink="/contact" 
             class="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold 
                    hover:bg-white hover:text-assurantis-red transition-all duration-300">
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {
  readonly TargetIcon = Target;
  readonly AwardIcon = Award;
  readonly UsersIcon = Users;
  readonly HeartIcon = Heart;
  readonly ShieldIcon = Shield;
  readonly TrendingUpIcon = TrendingUp;
}