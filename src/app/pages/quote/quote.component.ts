import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, User, Shield, FileText, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-angular';
import { MailRequestDto } from '../../@core/api/models';
import { HttpClient } from '@angular/common/http';
import { sendMail } from '../../@core/api/functions';

interface QuoteFormData {
  profile: any;
  needs: any;
  details: any;
}

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  template: `
    <section class="bg-assurantis-grayLighter min-h-screen py-12">
      <div class="container-custom max-w-4xl">
        
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-h1 mb-4">Demander un <span class="text-assurantis-red">Devis Gratuit</span></h1>
          <p class="text-lg text-assurantis-gray">
            Complétez ce formulaire en quelques minutes et recevez votre devis personnalisé sous 24h
          </p>
        </div>

        <!-- Progress Bar -->
        <div class="bg-white rounded-2xl p-8 shadow-soft mb-8">
          <div class="flex items-center justify-between mb-4">
            <div *ngFor="let step of steps; let i = index" 
                 class="flex items-center flex-1"
                 [class.last:flex-grow-0]="i === steps.length - 1">
              <!-- Step Circle -->
              <div class="relative">
                <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300"
                     [class.bg-assurantis-red]="currentStep > i"
                     [class.text-white]="currentStep > i"
                     [class.bg-assurantis-red]="currentStep === i"
                     [class.text-white]="currentStep === i"
                     [class.bg-assurantis-grayLight]="currentStep < i"
                     [class.text-assurantis-gray]="currentStep < i">
                  <lucide-icon *ngIf="currentStep > i" [img]="CheckCircleIcon" [size]="24"></lucide-icon>
                  <span *ngIf="currentStep <= i">{{ i + 1 }}</span>
                </div>
                <div class="absolute top-14 left-1/2 -translate-x-1/2 text-sm font-medium whitespace-nowrap"
                     [class.text-assurantis-red]="currentStep >= i"
                     [class.text-assurantis-gray]="currentStep < i">
                  {{ step.label }}
                </div>
              </div>
              
              <!-- Line connector -->
              <div *ngIf="i < steps.length - 1" class="flex-1 h-1 mx-4 rounded-full transition-all duration-300"
                   [class.bg-assurantis-red]="currentStep > i"
                   [class.bg-assurantis-grayLight]="currentStep <= i">
              </div>
            </div>
          </div>
        </div>

        <!-- Form Steps -->
        <div class="bg-white rounded-2xl p-8 shadow-soft">
          
          <!-- Step 1: Profile -->
          <div *ngIf="currentStep === 0" class="animate-fade-in">
            <div class="flex items-center space-x-3 mb-6">
              <lucide-icon [img]="UserIcon" [size]="28" class="text-assurantis-red"></lucide-icon>
              <h2 class="text-h2">Votre Profil</h2>
            </div>
            
            <form [formGroup]="profileForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                    Prénom <span class="text-assurantis-red">*</span>
                  </label>
                  <input type="text" formControlName="firstName" 
                         class="input-field"
                         [class.error]="isFieldInvalid('profile', 'firstName')"
                         placeholder="Jean">
                  <p *ngIf="isFieldInvalid('profile', 'firstName')" class="text-red-500 text-sm mt-1">
                    Le prénom est requis
                  </p>
                </div>
                
                <div>
                  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                    Nom <span class="text-assurantis-red">*</span>
                  </label>
                  <input type="text" formControlName="lastName" 
                         class="input-field"
                         [class.error]="isFieldInvalid('profile', 'lastName')"
                         placeholder="Dupont">
                  <p *ngIf="isFieldInvalid('profile', 'lastName')" class="text-red-500 text-sm mt-1">
                    Le nom est requis
                  </p>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                    Email <span class="text-assurantis-red">*</span>
                  </label>
                  <input type="email" formControlName="email" 
                         class="input-field"
                         [class.error]="isFieldInvalid('profile', 'email')"
                         placeholder="jean.dupont@email.com">
                  <p *ngIf="isFieldInvalid('profile', 'email')" class="text-red-500 text-sm mt-1">
                    Email valide requis
                  </p>
                </div>
                
                <div>
                  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                    Téléphone <span class="text-assurantis-red">*</span>
                  </label>
                  <input type="tel" formControlName="phone" 
                         class="input-field"
                         [class.error]="isFieldInvalid('profile', 'phone')"
                         placeholder="+32 4XX XX XX XX">
                  <p *ngIf="isFieldInvalid('profile', 'phone')" class="text-red-500 text-sm mt-1">
                    Téléphone requis
                  </p>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Date de naissance <span class="text-assurantis-red">*</span>
                </label>
                <input type="date" formControlName="birthDate" 
                       class="input-field"
                       [class.error]="isFieldInvalid('profile', 'birthDate')">
                <p *ngIf="isFieldInvalid('profile', 'birthDate')" class="text-red-500 text-sm mt-1">
                  Date de naissance requise
                </p>
              </div>

              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Adresse complète <span class="text-assurantis-red">*</span>
                </label>
                <input type="text" formControlName="address" 
                       class="input-field"
                       [class.error]="isFieldInvalid('profile', 'address')"
                       placeholder="Rue de l'Exemple 123, 1000 Bruxelles">
                <p *ngIf="isFieldInvalid('profile', 'address')" class="text-red-500 text-sm mt-1">
                  Adresse requise
                </p>
              </div>
            </form>
          </div>

          <!-- Step 2: Needs -->
          <div *ngIf="currentStep === 1" class="animate-fade-in">
            <div class="flex items-center space-x-3 mb-6">
              <lucide-icon [img]="ShieldIcon" [size]="28" class="text-assurantis-red"></lucide-icon>
              <h2 class="text-h2">Vos Besoins</h2>
            </div>
            
            <form [formGroup]="needsForm" class="space-y-6">
             
<div>
  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
    Type(s) d'assurance souhaité(s) <span class="text-assurantis-red">*</span>
  </label>
  <div class="flex flex-wrap gap-4">
    <label *ngFor="let type of insuranceTypes" class="flex items-center space-x-2">
      <input type="checkbox"
             [value]="type.value"
             (change)="onInsuranceTypeChange($event)"
             [checked]="needsForm.get('insuranceTypes')?.value.includes(type.value)">
      <span>{{ type.label }}</span>
    </label>
  </div>
  <p *ngIf="isFieldInvalid('needs', 'insuranceTypes')" class="text-red-500 text-sm mt-1">
    Veuillez sélectionner au moins un type d'assurance
  </p>
</div>

              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Budget mensuel estimé
                </label>
                <select formControlName="budget" class="input-field">
                  <option value="">Sélectionnez une fourchette</option>
                  <option value="0-50">Moins de 50€</option>
                  <option value="50-100">50€ - 100€</option>
                  <option value="100-200">100€ - 200€</option>
                  <option value="200-300">200€ - 300€</option>
                  <option value="300+">Plus de 300€</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Quand souhaitez-vous démarrer votre assurance ?
                </label>
                <input type="date" formControlName="startDate" class="input-field">
              </div>
            </form>
          </div>

          <!-- Step 3: Details -->
          <div *ngIf="currentStep === 2" class="animate-fade-in">
            <div class="flex items-center space-x-3 mb-6">
              <lucide-icon [img]="FileTextIcon" [size]="28" class="text-assurantis-red"></lucide-icon>
              <h2 class="text-h2">Détails Complémentaires</h2>
            </div>
            
            <form [formGroup]="detailsForm" class="space-y-6">
              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Avez-vous actuellement une assurance ?
                </label>
                <select formControlName="currentInsurance" class="input-field">
                  <option value="no">Non</option>
                  <option value="yes">Oui</option>
                </select>
              </div>

              <div *ngIf="detailsForm.get('currentInsurance')?.value === 'yes'">
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Nom de votre assureur actuel
                </label>
                <input type="text" formControlName="currentInsurer" 
                       class="input-field"
                       placeholder="Nom de la compagnie">
              </div>

              <div>
                <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                  Informations complémentaires ou questions
                </label>
                <textarea formControlName="additionalInfo" 
                          class="input-field min-h-[120px] resize-y"
                          placeholder="Décrivez vos besoins spécifiques, posez vos questions..."></textarea>
              </div>

              <div class="bg-assurantis-grayLighter rounded-xl p-4">
                <label class="flex items-start space-x-3 cursor-pointer">
                  <input type="checkbox" formControlName="consent" 
                         class="mt-1 w-5 h-5 text-assurantis-red rounded border-assurantis-gray 
                                focus:ring-assurantis-red focus:ring-offset-0">
                  <span class="text-sm text-assurantis-grayDark">
                    J'accepte que mes données soient traitées conformément à la 
                    <a href="/politique-confidentialite" target="_blank" class="text-assurantis-red underline">
                      politique de confidentialité
                    </a> et je consens à être contacté par ASSURANTIS pour recevoir mon devis. <span class="text-assurantis-red">*</span>
                  </span>
                </label>
                <p *ngIf="isFieldInvalid('details', 'consent')" class="text-red-500 text-sm mt-2 ml-8">
                  Vous devez accepter la politique de confidentialité
                </p>
              </div>
            </form>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-8 pt-6 border-t border-assurantis-grayLight">
            <button *ngIf="currentStep > 0" 
                    (click)="prevStep()"
                    class="btn-outline flex items-center space-x-2">
              <lucide-icon [img]="ArrowLeftIcon" [size]="20"></lucide-icon>
              <span>Précédent</span>
            </button>
            <div *ngIf="currentStep === 0"></div>
            
            <button *ngIf="currentStep < steps.length - 1" 
                    (click)="nextStep()"
                    class="btn-primary flex items-center space-x-2 ml-auto">
              <span>Suivant</span>
              <lucide-icon [img]="ArrowRightIcon" [size]="20"></lucide-icon>
            </button>

            <button *ngIf="currentStep === steps.length - 1" 
                    (click)="submitForm()"
                    [disabled]="isSubmitting"
                    class="btn-primary ml-auto disabled:opacity-50 disabled:cursor-not-allowed">
              {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande' }}
            </button>
          </div>
        </div>

      </div>
    </section>

    <!-- Success Modal -->
    <div *ngIf="showSuccessModal" 
         class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div class="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-soft-xl animate-slide-up">
        <div class="text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <lucide-icon [img]="CheckCircleIcon" [size]="40" class="text-green-600"></lucide-icon>
          </div>
          <h2 class="text-h2 mb-4">Demande envoyée avec succès !</h2>
          <p class="text-lg text-assurantis-gray mb-8">
            Merci {{ formData.profile.firstName }} ! Nous avons bien reçu votre demande de devis. 
            Notre équipe l'étudie et vous recontactera sous 24h avec une proposition personnalisée.
          </p>
          
          <div class="bg-assurantis-grayLighter rounded-2xl p-6 mb-8 text-left">
            <h3 class="font-semibold text-assurantis-grayDark mb-4">Récapitulatif de votre demande</h3>
            <dl class="space-y-2 text-sm">
              <div class="flex justify-between">
                <dt class="text-assurantis-gray">Référence :</dt>
                <dd class="font-semibold">{{ quoteReference }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-assurantis-gray">Contact :</dt>
                <dd class="font-semibold">{{ formData.profile.email }}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-assurantis-gray">Type(s) d'assurance :</dt>
                <dd class="font-semibold">{{ formData.needs.insuranceTypes?.length || 0 }} sélectionné(s)</dd>
              </div>
            </dl>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <button (click)="downloadRecap()" 
                    class="btn-secondary flex-1">
              Télécharger le récapitulatif
            </button>
            <button (click)="closeModal()" 
                    class="btn-primary flex-1">
              Retour à l'accueil
            </button>


          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @media print {
      body * {
        visibility: hidden;
      }
      .print-content, .print-content * {
        visibility: visible;
      }
      .print-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
      }
    }
  `]
})
export class QuoteComponent {
  // Icons
  readonly UserIcon = User;
  readonly ShieldIcon = Shield;
  readonly FileTextIcon = FileText;
  readonly CheckCircleIcon = CheckCircle;
  readonly ArrowLeftIcon = ArrowLeft;
  readonly ArrowRightIcon = ArrowRight;

  // Forms
  profileForm: FormGroup;
  needsForm: FormGroup;
  detailsForm: FormGroup;

  // State
  currentStep = 0;
  isSubmitting = false;
  showSuccessModal = false;
  quoteReference = '';
  formData: QuoteFormData = {
    profile: {},
    needs: {},
    details: {}
  };

  steps = [
    { label: 'Profil' },
    { label: 'Besoins' },
    { label: 'Détails' }
  ];

  insuranceTypes = [
    { value: 'auto', label: 'Assurance Auto' },
    { value: 'habitation', label: 'Assurance Habitation' },
    { value: 'familiale', label: 'RC Familiale' },
    { value: 'sante', label: 'Assurance Santé' },
    { value: 'vie', label: 'Assurance Vie' },
    { value: 'pro', label: 'Assurance Professionnelle' }
  ];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.needsForm = this.fb.group({
      insuranceTypes: [[], Validators.required],
      budget: [''],
      startDate: ['']
    });

    this.detailsForm = this.fb.group({
      currentInsurance: ['no'],
      currentInsurer: [''],
      additionalInfo: [''],
      consent: [false, Validators.requiredTrue]
    });
  }

  isFieldInvalid(formName: string, fieldName: string): boolean {
    const form = this.getForm(formName);
    const field = form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getForm(formName: string): FormGroup {
    switch (formName) {
      case 'profile': return this.profileForm;
      case 'needs': return this.needsForm;
      case 'details': return this.detailsForm;
      default: return this.profileForm;
    }
  }

  onInsuranceTypeChange(event: any) {
    const value = event.target.value;
    const checked = event.target.checked;
    const currentTypes = this.needsForm.get('insuranceTypes')?.value || [];
    
    if (checked) {
      this.needsForm.patchValue({
        insuranceTypes: [...currentTypes, value]
      });
    } else {
      this.needsForm.patchValue({
        insuranceTypes: currentTypes.filter((t: string) => t !== value)
      });
    }
  }

  nextStep() {
    const currentForm = this.getCurrentForm();
    Object.keys(currentForm.controls).forEach(key => {
      currentForm.get(key)?.markAsTouched();
    });

    if (currentForm.valid) {
      this.currentStep++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getCurrentForm(): FormGroup {
    switch (this.currentStep) {
      case 0: return this.profileForm;
      case 1: return this.needsForm;
      case 2: return this.detailsForm;
      default: return this.profileForm;
    }
  }

  async submitForm() {
    this.detailsForm.markAllAsTouched();
    
    if (!this.detailsForm.valid) {
      return;
    }

    this.isSubmitting = true;

    // Collecter toutes les données
    this.formData = {
      profile: this.profileForm.value,
      needs: this.needsForm.value,
      details: this.detailsForm.value
    };


     const mailRequest: MailRequestDto = {
    appCode: 'ASSURANTIS',
    email: this.formData.profile.email,
    mailType: 'QUOTE_REQUEST',
    name: `${this.formData.profile.firstName} ${this.formData.profile.lastName}`,
    phone: this.formData.profile.phone,
    message: 'Demande de devis via le formulaire',
    additionalData: {
      quote: this.formData // <-- Ajout de l'objet quote ici
    }
  };
    // Simuler un envoi (pas de backend)
   // await new Promise(resolve => setTimeout(resolve, 1500));
    //Call to Email service or backend would go here

    // Générer une référence unique
    //this.quoteReference = 'REF-' + Date.now().toString().slice(-8);

    //this.isSubmitting = false;
   // this.showSuccessModal = true;

      sendMail(this.http, 'http://localhost:8080/api', { body: mailRequest })
      .subscribe({
        next: () => {
          this.quoteReference = 'REF-' + Date.now().toString().slice(-8);
          this.isSubmitting = false;
          this.showSuccessModal = true;
        },
        error: () => {
          this.isSubmitting = false;
          // Gère l'erreur ici (affiche un message, etc.)
          alert('Une erreur est survenue lors de l\'envoi de votre demande. Veuillez réessayer plus tard.');
        }
      });
   
  }

  downloadRecap() {
    window.print();
  }

  closeModal() {
    this.showSuccessModal = false;
    window.location.href = '/';
  }
}