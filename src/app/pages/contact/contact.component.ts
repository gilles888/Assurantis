import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MapPin, Phone, Mail, Clock, Send } from 'lucide-angular';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { sendMail } from '../../@core/api/fn/mail-controller/send-mail';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ReactiveFormsModule,HttpClientModule],
  template: `
    <section class="bg-gradient-to-br from-assurantis-grayLighter to-white py-20">
      <div class="container-custom text-center">
        <h1 class="text-display mb-6">Contactez-<span class="text-assurantis-red">nous</span></h1>
        <p class="text-xl text-assurantis-gray max-w-3xl mx-auto leading-relaxed">
          Notre équipe est à votre écoute pour répondre à toutes vos questions
        </p>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12">
          
          <!-- Contact Information -->
          <div>
            <h2 class="text-h2 mb-8">Nos Coordonnées</h2>
            
            <div class="space-y-6">
              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-assurantis-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <lucide-icon [img]="MapPinIcon" [size]="24" class="text-assurantis-red"></lucide-icon>
                </div>
                <div>
                  <h3 class="font-semibold text-assurantis-grayDark mb-1">Adresse</h3>
                  <p class="text-assurantis-gray">
                    Avenue Louise 164<br>
                    1050 Ixelles<br>
                    Belgique
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-assurantis-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <lucide-icon [img]="PhoneIcon" [size]="24" class="text-assurantis-red"></lucide-icon>
                </div>
                <div>
                  <h3 class="font-semibold text-assurantis-grayDark mb-1">Téléphone</h3>
                  <a href="tel:+32477790383" class="text-assurantis-gray hover:text-assurantis-red transition-colors">
                    +32 477 79 03 83
                  </a>
                  <p class="text-sm text-assurantis-gray mt-1">Du lundi au vendredi, 9h-18h</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-assurantis-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <lucide-icon [img]="MailIcon" [size]="24" class="text-assurantis-red"></lucide-icon>
                </div>
                <div>
                  <h3 class="font-semibold text-assurantis-grayDark mb-1">Email</h3>
                  <a href="mailto:info@assurantis.net" class="text-assurantis-gray hover:text-assurantis-red transition-colors">
                    info&#64;assurantis.net
                  </a>
                  <p class="text-sm text-assurantis-gray mt-1">Réponse sous 24h</p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-assurantis-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <lucide-icon [img]="ClockIcon" [size]="24" class="text-assurantis-red"></lucide-icon>
                </div>
                <div>
                  <h3 class="font-semibold text-assurantis-grayDark mb-2">Horaires d'ouverture</h3>
                  <div class="space-y-1 text-sm text-assurantis-gray">
                    <p><span class="font-medium">Lundi - Vendredi:</span> 9h00 - 18h00</p>
                    <p><span class="font-medium">Samedi:</span> Fermé</p>
                    <p><span class="font-medium">Dimanche:</span> Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Placeholder 
            <div class="mt-8 rounded-2xl overflow-hidden shadow-soft h-80 bg-assurantis-grayLight">
              <img src="https://www.google.com/maps/place/Av.+Louise+164,+1050+Bruxelles/@50.8285195,4.3605507,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3c4ef451d97f9:0x71a9532df35a2bff!8m2!3d50.8285161!4d4.3631203!16s%2Fg%2F11tsnn9m82?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D" 
                   alt="Localisation ASSURANTIS" 
                   class="w-full h-full object-cover">
            </div>-->
            <div class="mt-4 text-lg font-semibold">
  Localisation ASSURANTIS
</div>

<div class="mt-2 rounded-2xl overflow-hidden shadow-soft bg-assurantis-grayLight">
  <!-- Wrapper pour le ratio 16:9 -->
  <div class="relative w-full pt-[56.25%]">
    <iframe
      class="absolute top-0 left-0 w-full h-full border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.1427651045005!2d4.360550741409275!3d50.82851946018765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4ef451d97f9%3A0x71a9532df35a2bff!2sAv.%20Louise%20164%2C%201050%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1764534438451!5m2!1sfr!2sbe"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>
  </div>
</div>

          </div>
          

          <!-- Contact Form -->
          <div>
            <div class="card">
              <h2 class="text-h2 mb-6">Envoyez-nous un message</h2>
              
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                <div>
                  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                    Nom complet <span class="text-assurantis-red">*</span>
                  </label>
                  <input type="text" formControlName="name" 
                         class="input-field"
                         [class.error]="isFieldInvalid('name')"
                         placeholder="Jean Dupont">
                  <p *ngIf="isFieldInvalid('name')" class="text-red-500 text-sm mt-1">
                    Le nom est requis
                  </p>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                    Email <span class="text-assurantis-red">*</span>
                  </label>
                  <input type="email" formControlName="email" 
                         class="input-field"
                         [class.error]="isFieldInvalid('email')"
                         placeholder="jean.dupont@email.com">
                  <p *ngIf="isFieldInvalid('email')" class="text-red-500 text-sm mt-1">
                    Email valide requis
                  </p>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                    Téléphone
                  </label>
                  <input type="tel" formControlName="phone" 
                         class="input-field"
                         placeholder="+32 4XX XX XX XX">
                </div>

                <div>
                  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                    Sujet <span class="text-assurantis-red">*</span>
                  </label>
                  <select formControlName="subject" 
                          class="input-field"
                          [class.error]="isFieldInvalid('subject')">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="quote">Demande de devis</option>
                    <option value="claim">Déclaration de sinistre</option>
                    <option value="info">Demande d'information</option>
                    <option value="complaint">Réclamation</option>
                    <option value="other">Autre</option>
                  </select>
                  <p *ngIf="isFieldInvalid('subject')" class="text-red-500 text-sm mt-1">
                    Sélectionnez un sujet
                  </p>
                </div>

                <div>
                  <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                    Message <span class="text-assurantis-red">*</span>
                  </label>
                  <textarea formControlName="message" 
                            class="input-field min-h-[150px] resize-y"
                            [class.error]="isFieldInvalid('message')"
                            placeholder="Décrivez votre demande..."></textarea>
                  <p *ngIf="isFieldInvalid('message')" class="text-red-500 text-sm mt-1">
                    Le message est requis
                  </p>
                </div>

                <button type="submit" 
                        [disabled]="isSubmitting"
                        class="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <span>{{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
                  <lucide-icon [img]="SendIcon" [size]="20"></lucide-icon>
                </button>
              </form>

              <!-- Success Message -->
              <div *ngIf="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                <p class="text-green-800 font-medium">
                  ✓ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            <div *ngIf="showError" class="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
  <p class="text-red-800 font-medium">
    ✗ {{ backendErrorMessage }}
  </p>
</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Quick Actions -->
    <section class="section-padding bg-assurantis-grayLighter">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-h2 mb-4">Besoin d'aide rapidement ?</h2>
          <p class="text-assurantis-gray">Choisissez l'option qui vous convient</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="tel:+32123456789" 
             class="card text-center hover:border-assurantis-red transition-all group">
            <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-assurantis-red transition-colors">
              <lucide-icon [img]="PhoneIcon" [size]="32" class="text-assurantis-red group-hover:text-white transition-colors"></lucide-icon>
            </div>
            <h3 class="font-semibold text-assurantis-grayDark mb-2">Appelez-nous</h3>
            <p class="text-sm text-assurantis-gray">Réponse immédiate</p>
          </a>

          <a href="mailto:info@assurantis.net" 
             class="card text-center hover:border-assurantis-red transition-all group">
            <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-assurantis-red transition-colors">
              <lucide-icon [img]="MailIcon" [size]="32" class="text-assurantis-red group-hover:text-white transition-colors"></lucide-icon>
            </div>
            <h3 class="font-semibold text-assurantis-grayDark mb-2">Écrivez-nous</h3>
            <p class="text-sm text-assurantis-gray">Réponse sous 24h</p>
          </a>

          <a routerLink="/devis" 
             class="card text-center hover:border-assurantis-red transition-all group">
            <div class="w-16 h-16 bg-assurantis-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-assurantis-red transition-colors">
              <lucide-icon [img]="SendIcon" [size]="32" class="text-assurantis-red group-hover:text-white transition-colors"></lucide-icon>
            </div>
            <h3 class="font-semibold text-assurantis-grayDark mb-2">Devis en ligne</h3>
            <p class="text-sm text-assurantis-gray">Rapide et gratuit</p>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  readonly MapPinIcon = MapPin;
  readonly PhoneIcon = Phone;
  readonly MailIcon = Mail;
  readonly ClockIcon = Clock;
  readonly SendIcon = Send;

  contactForm: FormGroup;
  isSubmitting = false;
  showSuccess = false;
   showError = false;
  backendErrorMessage = 'Une erreur est survenue lors de l\'envoi du message.';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

   onSubmit() {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.showSuccess = false;
      this.showError = false;

      const formData = this.contactForm.value;
      
      const mailRequest = {
        mailType: 'CONTACT_FORM',
        appCode: 'ASSURANTIS',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        subject: formData.subject,
        message: formData.messagegit
      };

      sendMail(this.http, 'http://localhost:8080', { body: mailRequest })
        .subscribe({
          next: () => {
            this.isSubmitting = false;
            this.showSuccess = true;
            this.contactForm.reset();

            // Cacher le message de succès après 5 secondes
            setTimeout(() => {
              this.showSuccess = false;
            }, 5000);
          },
          error: (error) => {
            console.error('Erreur lors de l\'envoi du message:', error);
            this.isSubmitting = false;
            this.showError = true;

          try {
            const errorBody = error?.error ? JSON.parse(new TextDecoder().decode(error.error)) : {};
            this.backendErrorMessage = errorBody.errors?.message || 'Erreur inconnue';
          } catch {
            this.backendErrorMessage = 'Erreur inconnue';
          }
            setTimeout(() => {
              this.showError = false;
            }, 5000);
          }
        });
    }
  }
}