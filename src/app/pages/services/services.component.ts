import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { LucideAngularModule, Car, Home, Shield, Heart, TrendingUp, Briefcase, Check } from 'lucide-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  template: `
    <!-- Hero -->
    <section class="bg-gradient-to-br from-assurantis-grayLighter to-white py-20">
      <div class="container-custom text-center">
        <h1 class="text-display mb-6">Nos <span class="text-assurantis-red">Solutions d'Assurance</span></h1>
        <p class="text-xl text-assurantis-gray max-w-3xl mx-auto leading-relaxed">
          Des protections complètes et personnalisées pour sécuriser tous les aspects de votre vie, 
          personnelle comme professionnelle
        </p>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="bg-white border-b border-assurantis-grayLight sticky top-20 z-40">
      <div class="container-custom py-4">
        <div class="flex flex-wrap gap-3 justify-center">
          <a (click)="scrollToSection('auto')" 
             class="px-4 py-2 rounded-lg bg-assurantis-grayLighter hover:bg-assurantis-red hover:text-white 
                    transition-colors cursor-pointer font-medium text-sm">
            Assurance Auto
          </a>
          <a (click)="scrollToSection('habitation')"
             class="px-4 py-2 rounded-lg bg-assurantis-grayLighter hover:bg-assurantis-red hover:text-white 
                    transition-colors cursor-pointer font-medium text-sm">
            Assurance Habitation
          </a>
          <a (click)="scrollToSection('familiale')"
             class="px-4 py-2 rounded-lg bg-assurantis-grayLighter hover:bg-assurantis-red hover:text-white 
                    transition-colors cursor-pointer font-medium text-sm">
            RC Familiale
          </a>
          <a (click)="scrollToSection('sante')"
             class="px-4 py-2 rounded-lg bg-assurantis-grayLighter hover:bg-assurantis-red hover:text-white 
                    transition-colors cursor-pointer font-medium text-sm">
            Assurance Santé
          </a>
          <a (click)="scrollToSection('vie')"
             class="px-4 py-2 rounded-lg bg-assurantis-grayLighter hover:bg-assurantis-red hover:text-white 
                    transition-colors cursor-pointer font-medium text-sm">
            Assurance Vie
          </a>
          <a (click)="scrollToSection('pro')"
             class="px-4 py-2 rounded-lg bg-assurantis-grayLighter hover:bg-assurantis-red hover:text-white 
                    transition-colors cursor-pointer font-medium text-sm">
            Assurance Pro
          </a>
        </div>
      </div>
    </section>

    <!-- Services Details -->
    <section class="section-padding bg-white">
      <div class="container-custom space-y-24">
        
        <!-- Assurance Auto -->
        <div id="auto" class="scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center justify-center w-16 h-16 bg-assurantis-red/10 rounded-2xl mb-6">
                <lucide-icon [img]="CarIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
              </div>
              <h2 class="text-h1 mb-6">Assurance Auto</h2>
              <p class="text-lg text-assurantis-gray mb-8 leading-relaxed">
                Roulez l'esprit tranquille avec une couverture adaptée à votre véhicule et votre profil de conduite. 
                Du minimum légal aux garanties tous risques, nous trouvons la formule idéale.
              </p>
              
              <h3 class="text-h3 mb-4">Garanties principales</h3>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Responsabilité Civile obligatoire</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Protection omnium complète ou partielle</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Assistance dépannage 24/7 en Belgique et Europe</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Protection du conducteur en cas d'accident</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Bris de glace et remplacement de pare-brise</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Vol et incendie du véhicule</span>
                </li>
              </ul>

              <a routerLink="/devis" class="btn-primary">Demander un devis auto</a>
            </div>
            <div class="rounded-3xl overflow-hidden shadow-soft-xl">
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop" 
                   alt="Assurance Auto" 
                   class="w-full h-full object-cover"
                   loading="lazy">
            </div>
          </div>
        </div>

        <!-- Assurance Habitation -->
        <div id="habitation" class="scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-soft-xl">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop" 
                   alt="Assurance Habitation" 
                   class="w-full h-full object-cover"
                   loading="lazy">
            </div>
            <div class="order-1 lg:order-2">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-assurantis-red/10 rounded-2xl mb-6">
                <lucide-icon [img]="HomeIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
              </div>
              <h2 class="text-h1 mb-6">Assurance Habitation</h2>
              <p class="text-lg text-assurantis-gray mb-8 leading-relaxed">
                Protégez votre maison, appartement ou contenu contre tous les aléas du quotidien. 
                Que vous soyez propriétaire ou locataire, dormez sur vos deux oreilles.
              </p>
              
              <h3 class="text-h3 mb-4">Garanties principales</h3>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Incendie, explosion, dégâts des eaux</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Vol, vandalisme et dégradations</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Tempête, grêle et catastrophes naturelles</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Responsabilité locative pour locataires</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Protection du contenu et objets de valeur</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Frais de relogement temporaire</span>
                </li>
              </ul>

              <a routerLink="/devis" class="btn-primary">Demander un devis habitation</a>
            </div>
          </div>
        </div>

        <!-- RC Familiale -->
        <div id="familiale" class="scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center justify-center w-16 h-16 bg-assurantis-red/10 rounded-2xl mb-6">
                <lucide-icon [img]="ShieldIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
              </div>
              <h2 class="text-h1 mb-6">RC Familiale</h2>
              <p class="text-lg text-assurantis-gray mb-8 leading-relaxed">
                L'assurance indispensable qui couvre toute votre famille contre les dommages causés involontairement 
                à des tiers dans la vie privée.
              </p>
              
              <h3 class="text-h3 mb-4">Garanties principales</h3>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Dommages corporels et matériels causés à autrui</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Protection de tous les membres du foyer</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Couverture des enfants mineurs et majeurs étudiants</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Protection juridique incluse</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Animaux domestiques couverts</span>
                </li>
              </ul>

              <a routerLink="/devis" class="btn-primary">Demander un devis RC familiale</a>
            </div>
            <div class="rounded-3xl overflow-hidden shadow-soft-xl">
              <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop" 
                   alt="RC Familiale" 
                   class="w-full h-full object-cover"
                   loading="lazy">
            </div>
          </div>
        </div>

        <!-- Assurance Santé -->
        <div id="sante" class="scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-soft-xl">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" 
                   alt="Assurance Santé" 
                   class="w-full h-full object-cover"
                   loading="lazy">
            </div>
            <div class="order-1 lg:order-2">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-assurantis-red/10 rounded-2xl mb-6">
                <lucide-icon [img]="HeartIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
              </div>
              <h2 class="text-h1 mb-6">Assurance Santé</h2>
              <p class="text-lg text-assurantis-gray mb-8 leading-relaxed">
                Complétez votre mutuelle avec une hospitalisation qui vous permet de choisir votre confort 
                et vos médecins sans vous soucier des frais.
              </p>
              
              <h3 class="text-h3 mb-4">Garanties principales</h3>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Chambre individuelle en cas d'hospitalisation</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Soins dentaires et orthodontie</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Médecines douces (ostéopathie, kiné, etc.)</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Lunettes et lentilles de contact</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Couverture mondiale incluse</span>
                </li>
              </ul>

              <a routerLink="/devis" class="btn-primary">Demander un devis santé</a>
            </div>
          </div>
        </div>

        <!-- Assurance Vie -->
        <div id="vie" class="scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="inline-flex items-center justify-center w-16 h-16 bg-assurantis-red/10 rounded-2xl mb-6">
                <lucide-icon [img]="TrendingUpIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
              </div>
              <h2 class="text-h1 mb-6">Assurance Vie</h2>
              <p class="text-lg text-assurantis-gray mb-8 leading-relaxed">
                Préparez sereinement votre avenir et celui de vos proches avec nos solutions d'épargne 
                et de prévoyance fiscalement avantageuses.
              </p>
              
              <h3 class="text-h3 mb-4">Garanties principales</h3>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Épargne fiscale avec avantage branche 21 ou 23</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Protection décès pour sécuriser vos proches</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Pension complémentaire et épargne retraite</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Transmission de patrimoine optimisée</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Placement sécurisé ou dynamique selon profil</span>
                </li>
              </ul>

              <a routerLink="/devis" class="btn-primary">Demander un devis vie</a>
            </div>
            <div class="rounded-3xl overflow-hidden shadow-soft-xl">
              <img src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=600&fit=crop" 
                   alt="Assurance Vie" 
                   class="w-full h-full object-cover"
                   loading="lazy">
            </div>
          </div>
        </div>

        <!-- Assurance Pro -->
        <div id="pro" class="scroll-mt-32">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-soft-xl">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" 
                   alt="Assurance Professionnelle" 
                   class="w-full h-full object-cover"
                   loading="lazy">
            </div>
            <div class="order-1 lg:order-2">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-assurantis-red/10 rounded-2xl mb-6">
                <lucide-icon [img]="BriefcaseIcon" [size]="32" class="text-assurantis-red"></lucide-icon>
              </div>
              <h2 class="text-h1 mb-6">Assurance Professionnelle</h2>
              <p class="text-lg text-assurantis-gray mb-8 leading-relaxed">
                Des solutions complètes pour protéger votre activité professionnelle, 
                que vous soyez indépendant, profession libérale ou chef d'entreprise.
              </p>
              
              <h3 class="text-h3 mb-4">Garanties principales</h3>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">RC professionnelle et exploitation</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Protection juridique pour litiges professionnels</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Cyber-risques et protection des données</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Assurance des locaux et matériel professionnel</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Perte d'exploitation et interruption d'activité</span>
                </li>
                <li class="flex items-start space-x-3">
                  <lucide-icon [img]="CheckIcon" [size]="20" class="text-assurantis-red mt-1 flex-shrink-0"></lucide-icon>
                  <span class="text-assurantis-grayDark">Couverture pour véhicules professionnels</span>
                </li>
              </ul>

              <a routerLink="/devis" class="btn-primary">Demander un devis pro</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA Final -->
    <section class="section-padding bg-assurantis-red text-white">
      <div class="container-custom text-center">
        <h2 class="text-h1 mb-6">Besoin d'une solution sur-mesure ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Chaque situation est unique. Contactez-nous pour un conseil personnalisé et un devis gratuit adapté à vos besoins.
        </p>
        <a routerLink="/devis" 
           class="bg-white text-assurantis-red px-8 py-4 rounded-xl font-semibold inline-block
                  hover:bg-assurantis-grayLight transition-all duration-300 shadow-soft-lg">
          Demander votre devis personnalisé
        </a>
      </div>
    </section>
  `,
  styles: []
})
export class ServicesComponent implements OnInit {
  readonly CarIcon = Car;
  readonly HomeIcon = Home;
  readonly ShieldIcon = Shield;
  readonly HeartIcon = Heart;
  readonly TrendingUpIcon = TrendingUp;
  readonly BriefcaseIcon = Briefcase;
  readonly CheckIcon = Check;

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => this.scrollToSection(fragment), 100);
      }
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Offset pour le sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}