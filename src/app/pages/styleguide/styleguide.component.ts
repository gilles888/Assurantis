import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-styleguide',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-white">
      <div class="container-custom">
        <h1 class="text-display mb-4">ASSURANTIS <span class="text-assurantis-red">Style Guide</span></h1>
        <p class="text-xl text-assurantis-gray mb-12">
          Guide de style et palette de couleurs de la marque
        </p>

        <!-- Colors -->
        <section class="mb-16">
          <h2 class="text-h1 mb-8">Palette de Couleurs</h2>
          
          <div class="grid md:grid-cols-3 gap-6 mb-8">
            <!-- Primary Red -->
            <div>
              <h3 class="text-h3 mb-4">Rouge Principal</h3>
              <div class="space-y-3">
                <div class="flex items-center space-x-4">
                  <div class="w-24 h-24 rounded-2xl bg-assurantis-red shadow-soft"></div>
                  <div>
                    <p class="font-mono text-sm font-semibold">#C0182A</p>
                    <p class="text-sm text-assurantis-gray">assurantis.red</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-24 h-24 rounded-2xl bg-assurantis-redDark shadow-soft"></div>
                  <div>
                    <p class="font-mono text-sm font-semibold">#8F1120</p>
                    <p class="text-sm text-assurantis-gray">assurantis.redDark</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="w-24 h-24 rounded-2xl bg-assurantis-redLight shadow-soft"></div>
                  <div>
                    <p class="font-mono text-sm font-semibold">#E94A59</p>
                    <p class="text-sm text-assurantis-gray">assurantis.redLight</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Grays -->
            <div>
              <h3 class="text-h3 mb-4">Gris Métallisés</h3>
              <div class="space-y-3">
                <div class="flex items-center space-x-4">
                  <div class="w-24 h-24 rounded-2xl bg-assurantis-grayDark shadow-soft"></div>
                  <div>
                    <p class="font-mono text-sm font-semibold">#4A4A4A</p>
                    <p class="text-sm text-assurantis-gray">assurantis.grayDark</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-24 h-24 rounded-2xl bg-assurantis-gray shadow-soft"></div>
                  <div>
                    <p class="font-mono text-sm font-semibold">#8C8C8C</p>
                    <p class="text-sm text-assurantis-gray">assurantis.gray</p>
                  </div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="w-24 h-24 rounded-2xl bg-assurantis-grayLight shadow-soft"></div>
                  <div>
                    <p class="font-mono text-sm font-semibold">#E5E5E5</p>
                    <p class="text-sm text-assurantis-gray">assurantis.grayLight</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Neutrals -->
            <div>
              <h3 class="text-h3 mb-4">Neutres</h3>
              <div class="space-y-3">
                <div class="flex items-center space-x-4">
                  <div class="w-24 h-24 rounded-2xl bg-white shadow-soft border border-assurantis-grayLight"></div>
                  <div>
                    <p class="font-mono text-sm font-semibold">#FFFFFF</p>
                    <p class="text-sm text-assurantis-gray">white</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4">
                  <div class="w-24 h-24 rounded-2xl bg-assurantis-grayLighter shadow-soft"></div>
                  <div>
                    <p class="font-mono text-sm font-semibold">#F5F5F5</p>
                    <p class="text-sm text-assurantis-gray">assurantis.grayLighter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Usage Guidelines -->
          <div class="card bg-assurantis-grayLighter">
            <h3 class="text-h4 mb-4">Guidelines d'utilisation</h3>
            <ul class="space-y-2 text-assurantis-grayDark">
              <li class="flex items-start space-x-2">
                <span class="text-assurantis-red mt-1">•</span>
                <span><strong>Rouge principal (#C0182A)</strong> : CTA principaux, liens importants, accents</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-assurantis-red mt-1">•</span>
                <span><strong>Rouge foncé (#8F1120)</strong> : Hover states, titres d'accent</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-assurantis-red mt-1">•</span>
                <span><strong>Gris foncé (#4A4A4A)</strong> : Texte principal, titres</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-assurantis-red mt-1">•</span>
                <span><strong>Gris moyen (#8C8C8C)</strong> : Texte secondaire, descriptions</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-assurantis-red mt-1">•</span>
                <span><strong>Gris clair (#E5E5E5)</strong> : Bordures, séparateurs, arrière-plans subtils</span>
              </li>
            </ul>
          </div>
        </section>

        <!-- Typography -->
        <section class="mb-16">
          <h2 class="text-h1 mb-8">Typographie</h2>
          
          <div class="space-y-8">
            <div class="card">
              <p class="text-display">Display Text - Inter Bold 56px</p>
              <p class="text-sm text-assurantis-gray mt-2">Usage : Hero titles, page headers</p>
            </div>

            <div class="card">
              <h1 class="text-h1">Heading 1 - Inter Bold 40px</h1>
              <p class="text-sm text-assurantis-gray mt-2">Usage : Main section titles</p>
            </div>

            <div class="card">
              <h2 class="text-h2">Heading 2 - Inter Bold 32px</h2>
              <p class="text-sm text-assurantis-gray mt-2">Usage : Section titles, subsections</p>
            </div>

            <div class="card">
              <h3 class="text-h3">Heading 3 - Inter Semibold 24px</h3>
              <p class="text-sm text-assurantis-gray mt-2">Usage : Card titles, sub-sections</p>
            </div>

            <div class="card">
              <h4 class="text-h4">Heading 4 - Inter Semibold 20px</h4>
              <p class="text-sm text-assurantis-gray mt-2">Usage : Small section titles</p>
            </div>

            <div class="card">
              <p class="text-base">Body text - Inter Regular 16px. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p class="text-sm text-assurantis-gray mt-2">Usage : Body copy, paragraphs</p>
            </div>

            <div class="card">
              <p class="text-sm">Small text - Inter Regular 14px. Lorem ipsum dolor sit amet.</p>
              <p class="text-sm text-assurantis-gray mt-2">Usage : Captions, labels, meta information</p>
            </div>
          </div>
        </section>

        <!-- Buttons -->
        <section class="mb-16">
          <h2 class="text-h1 mb-8">Boutons</h2>
          
          <div class="space-y-6">
            <div class="card">
              <h3 class="text-h4 mb-4">Primary Button</h3>
              <button class="btn-primary">Demander un devis</button>
              <p class="text-sm text-assurantis-gray mt-3">Usage : Actions principales, CTA importants</p>
            </div>

            <div class="card">
              <h3 class="text-h4 mb-4">Secondary Button</h3>
              <button class="btn-secondary">En savoir plus</button>
              <p class="text-sm text-assurantis-gray mt-3">Usage : Actions secondaires</p>
            </div>

            <div class="card">
              <h3 class="text-h4 mb-4">Outline Button</h3>
              <button class="btn-outline">Annuler</button>
              <p class="text-sm text-assurantis-gray mt-3">Usage : Actions tertiaires, retour</p>
            </div>

            <div class="card">
              <h3 class="text-h4 mb-4">Disabled Button</h3>
              <button class="btn-primary opacity-50 cursor-not-allowed" disabled>Bouton désactivé</button>
              <p class="text-sm text-assurantis-gray mt-3">État : Disabled</p>
            </div>
          </div>
        </section>

        <!-- Cards -->
        <section class="mb-16">
          <h2 class="text-h1 mb-8">Cartes</h2>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="card">
              <h3 class="text-h4 mb-3">Card Standard</h3>
              <p class="text-assurantis-gray">
                Carte avec padding, ombres douces et bordures arrondies. Parfait pour le contenu principal.
              </p>
            </div>

            <div class="card hover:shadow-soft-lg transition-all cursor-pointer">
              <h3 class="text-h4 mb-3">Card Interactive</h3>
              <p class="text-assurantis-gray">
                Survole cette carte pour voir l'effet. Utilisé pour les éléments cliquables.
              </p>
            </div>

            <div class="card border-assurantis-red">
              <h3 class="text-h4 mb-3">Card Highlighted</h3>
              <p class="text-assurantis-gray">
                Carte avec bordure rouge pour mettre en évidence du contenu important.
              </p>
            </div>
          </div>
        </section>

        <!-- Spacing -->
        <section class="mb-16">
          <h2 class="text-h1 mb-8">Espacement</h2>
          
          <div class="card">
            <h3 class="text-h4 mb-4">Spacing Scale (Tailwind)</h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-32 text-sm font-mono text-assurantis-gray">4 (16px)</div>
                <div class="h-4 bg-assurantis-red rounded"></div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-32 text-sm font-mono text-assurantis-gray">6 (24px)</div>
                <div class="h-6 bg-assurantis-red rounded"></div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-32 text-sm font-mono text-assurantis-gray">8 (32px)</div>
                <div class="h-8 bg-assurantis-red rounded"></div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-32 text-sm font-mono text-assurantis-gray">12 (48px)</div>
                <div class="h-12 bg-assurantis-red rounded"></div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="w-32 text-sm font-mono text-assurantis-gray">16 (64px)</div>
                <div class="h-16 bg-assurantis-red rounded"></div>
              </div>
            </div>
            <p class="text-sm text-assurantis-gray mt-6">
              Sections : py-16 md:py-24 lg:py-32 (.section-padding)
            </p>
          </div>
        </section>

        <!-- Shadows & Border Radius -->
        <section class="mb-16">
          <h2 class="text-h1 mb-8">Ombres & Arrondis</h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Shadows -->
            <div>
              <h3 class="text-h3 mb-6">Box Shadows</h3>
              <div class="space-y-4">
                <div class="p-6 bg-white rounded-2xl shadow-soft">
                  <p class="font-semibold mb-1">shadow-soft</p>
                  <p class="text-sm text-assurantis-gray">0 2px 8px rgba(0, 0, 0, 0.08)</p>
                </div>
                <div class="p-6 bg-white rounded-2xl shadow-soft-lg">
                  <p class="font-semibold mb-1">shadow-soft-lg</p>
                  <p class="text-sm text-assurantis-gray">0 8px 24px rgba(0, 0, 0, 0.12)</p>
                </div>
                <div class="p-6 bg-white rounded-2xl shadow-soft-xl">
                  <p class="font-semibold mb-1">shadow-soft-xl</p>
                  <p class="text-sm text-assurantis-gray">0 16px 48px rgba(0, 0, 0, 0.15)</p>
                </div>
                <div class="p-6 bg-white rounded-2xl shadow-red">
                  <p class="font-semibold mb-1">shadow-red</p>
                  <p class="text-sm text-assurantis-gray">0 4px 16px rgba(192, 24, 42, 0.2)</p>
                </div>
              </div>
            </div>

            <!-- Border Radius -->
            <div>
              <h3 class="text-h3 mb-6">Border Radius</h3>
              <div class="space-y-4">
                <div class="p-6 bg-assurantis-grayLight rounded-xl">
                  <p class="font-semibold mb-1">rounded-xl</p>
                  <p class="text-sm text-assurantis-gray">12px (inputs, small cards)</p>
                </div>
                <div class="p-6 bg-assurantis-grayLight rounded-2xl">
                  <p class="font-semibold mb-1">rounded-2xl</p>
                  <p class="text-sm text-assurantis-gray">16px (cards, sections)</p>
                </div>
                <div class="p-6 bg-assurantis-grayLight rounded-3xl">
                  <p class="font-semibold mb-1">rounded-3xl</p>
                  <p class="text-sm text-assurantis-gray">24px (large sections, modals)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Form Elements -->
        <section>
          <h2 class="text-h1 mb-8">Éléments de Formulaire</h2>
          
          <div class="card max-w-2xl">
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Input Text
                </label>
                <input type="text" class="input-field" placeholder="Entrez votre texte">
              </div>

              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Input Error State
                </label>
                <input type="text" class="input-field error" placeholder="Champ avec erreur">
                <p class="text-red-500 text-sm mt-1">Ce champ est requis</p>
              </div>

              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Select
                </label>
                <select class="input-field">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Textarea
                </label>
                <textarea class="input-field min-h-[100px]" placeholder="Votre message..."></textarea>
              </div>

              <div>
                <label class="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" class="mt-1 w-5 h-5 text-assurantis-red rounded">
                  <span class="text-sm text-assurantis-grayDark">
                    J'accepte les conditions générales
                  </span>
                </label>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  `,
  styles: []
})
export class StyleguideComponent {}