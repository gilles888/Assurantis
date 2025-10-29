import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Car, Home, Shield, Heart, TrendingUp, Briefcase, Clock, Award, Users,Phone } from 'lucide-angular';
import { AppHeroComponent } from '../../components/hero/hero.component';
import { AppServiceCardComponent } from '../../components/service-card/service-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, AppHeroComponent, AppServiceCardComponent],
  template: `
    <!-- Hero Section -->
    <app-hero
      title="Votre protection,<br><span class='text-assurantis-red'>notre priorité</span>"
      subtitle="Courtier en assurances indépendant à Bruxelles. Nous trouvons les meilleures solutions pour protéger ce qui compte vraiment pour vous."
      [primaryCta]="{ text: 'Demander un devis', link: '/devis' }"
      [secondaryCta]="{ text: 'Nos services', link: '/services' }"
      [showTrustBadges]="true"
      imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
      imageAlt="Famille heureuse et protégée">
    </app-hero>

    <!-- Services Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-h1 mb-4">Nos solutions d'assurance</h2>
          <p class="text-xl text-assurantis-gray max-w-2xl mx-auto">
            Des protections complètes et sur-mesure pour tous vos besoins, particuliers et professionnels
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-service-card
            [icon]="CarIcon"
            title="Assurance Auto"
            description="Protection complète pour votre véhicule avec des garanties adaptées à votre profil."
            [benefits]="['RC obligatoire', 'Tous risques disponible', 'Assistance 24/7']"
            ctaLink="/services#auto">
          </app-service-card>

          <app-service-card
            [icon]="HomeIcon"
            title="Assurance Habitation"
            description="Protégez votre logement et vos biens contre tous les risques du quotidien."
            [benefits]="['Incendie & dégâts', 'Vol & vandalisme', 'Responsabilité locative']"
            ctaLink="/services#habitation">
          </app-service-card>

          <app-service-card
            [icon]="ShieldIcon"
            title="RC Familiale"
            description="Une protection essentielle pour toute la famille contre les dommages causés à autrui."
            [benefits]="['Dommages corporels', 'Dommages matériels', 'Toute la famille']"
            ctaLink="/services#familiale">
          </app-service-card>

          <app-service-card
            [icon]="HeartIcon"
            title="Assurance Santé"
            description="Complémentaire hospitalisation pour des soins de qualité sans souci financier."
            [benefits]="['Chambre individuelle', 'Soins dentaires', 'Médecines douces']"
            ctaLink="/services#sante">
          </app-service-card>

          <app-service-card
            [icon]="TrendingUpIcon"
            title="Assurance Vie"
            description="Préparez l'avenir et protégez vos proches avec nos solutions épargne et prévoyance."
            [benefits]="['Épargne fiscale', 'Protection décès', 'Transmission patrimoine']"
            ctaLink="/services#vie">
          </app-service-card>

          <app-service-card
            [icon]="BriefcaseIcon"
            title="Assurance Pro"
            description="Solutions complètes pour les indépendants et entreprises : RC, protection juridique..."
            [benefits]="['RC professionnelle', 'Protection juridique', 'Cyber-risques']"
            ctaLink="/services#pro">
          </app-service-card>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="section-padding bg-assurantis-grayLighter">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-h1 mb-4">Pourquoi choisir ASSURANTIS ?</h2>
          <p class="text-xl text-assurantis-gray max-w-2xl mx-auto">
            Trois piliers qui font notre différence
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Proximité -->
          <div class="text-center">
            <div class="w-20 h-20 bg-assurantis-red rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-red">
              <lucide-icon [img]="UsersIcon" [size]="40" class="text-white"></lucide-icon>
            </div>
            <h3 class="text-h3 mb-4">Proximité</h3>
            <p class="text-assurantis-gray leading-relaxed">
              Un courtier local qui connaît vos besoins et reste disponible pour vous accompagner à chaque étape.
            </p>
          </div>

          <!-- Indépendance -->
          <div class="text-center">
            <div class="w-20 h-20 bg-assurantis-red rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-red">
              <lucide-icon [img]="AwardIcon" [size]="40" class="text-white"></lucide-icon>
            </div>
            <h3 class="text-h3 mb-4">Indépendance</h3>
            <p class="text-assurantis-gray leading-relaxed">
              Nous comparons les offres de multiples assureurs pour vous proposer la meilleure couverture au meilleur prix.
            </p>
          </div>

          <!-- Réactivité -->
          <div class="text-center">
            <div class="w-20 h-20 bg-assurantis-red rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-red">
              <lucide-icon [img]="ClockIcon" [size]="40" class="text-white"></lucide-icon>
            </div>
            <h3 class="text-h3 mb-4">Réactivité</h3>
            <p class="text-assurantis-gray leading-relaxed">
              Une réponse rapide à vos demandes, un traitement efficace de vos dossiers, une gestion proactive de vos sinistres.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-h1 mb-4">Ils nous font confiance</h2>
          <p class="text-xl text-assurantis-gray max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="card">
            <div class="flex items-center space-x-1 mb-4">
              <span class="text-yellow-400 text-xl" *ngFor="let star of [1,2,3,4,5]">★</span>
            </div>
            <p class="text-assurantis-grayDark mb-6 italic leading-relaxed">
              "Service impeccable et conseils personnalisés. J'ai économisé 30% sur mon assurance auto en changeant de compagnie grâce à ASSURANTIS."
            </p>
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-assurantis-grayLight rounded-full flex items-center justify-center">
                <span class="font-bold text-assurantis-red">ML</span>
              </div>
              <div>
                <div class="font-semibold text-assurantis-grayDark">Marie Lefebvre</div>
                <div class="text-sm text-assurantis-gray">Cliente depuis 2022</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="card">
            <div class="flex items-center space-x-1 mb-4">
              <span class="text-yellow-400 text-xl" *ngFor="let star of [1,2,3,4,5]">★</span>
            </div>
            <p class="text-assurantis-grayDark mb-6 italic leading-relaxed">
              "Excellente réactivité lors de mon sinistre. Le suivi a été parfait du début à la fin. Je recommande vivement !"
            </p>
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-assurantis-grayLight rounded-full flex items-center justify-center">
                <span class="font-bold text-assurantis-red">PD</span>
              </div>
              <div>
                <div class="font-semibold text-assurantis-grayDark">Pierre Dubois</div>
                <div class="text-sm text-assurantis-gray">Client depuis 2020</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="card">
            <div class="flex items-center space-x-1 mb-4">
              <span class="text-yellow-400 text-xl" *ngFor="let star of [1,2,3,4,5]">★</span>
            </div>
            <p class="text-assurantis-grayDark mb-6 italic leading-relaxed">
              "Un courtier à l'écoute qui prend le temps d'expliquer. Les tarifs sont compétitifs et les garanties excellentes."
            </p>
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-assurantis-grayLight rounded-full flex items-center justify-center">
                <span class="font-bold text-assurantis-red">SL</span>
              </div>
              <div>
                <div class="font-semibold text-assurantis-grayDark">Sophie Lambert</div>
                <div class="text-sm text-assurantis-gray">Cliente depuis 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="section-padding bg-assurantis-grayLighter">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h2 mb-4">Nos partenaires assureurs</h2>
          <p class="text-assurantis-gray">
            Nous collaborons avec les meilleures compagnies d'assurance en Belgique
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="bg-white rounded-2xl p-6 flex items-center justify-center h-24 shadow-soft">
            <span class="text-xl font-bold text-assurantis-gray">AG Insurance</span>
          </div>
          <div class="bg-white rounded-2xl p-6 flex items-center justify-center h-24 shadow-soft">
            <span class="text-xl font-bold text-assurantis-gray">AXA Belgium</span>
          </div>
          <div class="bg-white rounded-2xl p-6 flex items-center justify-center h-24 shadow-soft">
            <span class="text-xl font-bold text-assurantis-gray">Ethias</span>
          </div>
          <div class="bg-white rounded-2xl p-6 flex items-center justify-center h-24 shadow-soft">
            <span class="text-xl font-bold text-assurantis-gray">Baloise</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-br from-assurantis-red to-assurantis-redDark text-white">
      <div class="container-custom text-center">
        <h2 class="text-h1 mb-6">Prêt à vous protéger ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Demandez votre devis gratuit en quelques clics et recevez une réponse personnalisée sous 24h
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/devis" 
             class="bg-white text-assurantis-red px-8 py-4 rounded-xl font-semibold 
                    hover:bg-assurantis-grayLight transition-all duration-300 shadow-soft-lg
                    focus:outline-none focus:ring-4 focus:ring-white/30">
            Demander un devis gratuit
          </a>
          <a routerLink="/contact" 
             class="bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl font-semibold 
                    hover:bg-white hover:text-assurantis-red transition-all duration-300
                    focus:outline-none focus:ring-4 focus:ring-white/30">
            Nous contacter
          </a>
        </div>

        <!-- Quick Contact -->
        <div class="mt-12 pt-8 border-t border-white/20">
          <p class="text-lg mb-4 opacity-90">Besoin d'un renseignement immédiat ?</p>
          <a href="tel:+32123456789" 
             class="text-2xl font-bold hover:underline inline-flex items-center space-x-2">
            <lucide-icon [img]="PhoneIcon" [size]="28"></lucide-icon>
            <span>+32 1 234 56 789</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent {
  readonly CarIcon = Car;
  readonly HomeIcon = Home;
  readonly ShieldIcon = Shield;
  readonly HeartIcon = Heart;
  readonly TrendingUpIcon = TrendingUp;
  readonly BriefcaseIcon = Briefcase;
  readonly ClockIcon = Clock;
  readonly AwardIcon = Award;
  readonly UsersIcon = Users;
  readonly PhoneIcon = Phone;
}