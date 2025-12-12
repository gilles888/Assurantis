import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LucideAngularModule, AlertCircle, Phone, FileText, Upload } from 'lucide-angular';
import { sendMail } from '../../@core/api/functions';
import { 
  convertFilesToAttachments, 
  formatFileSize,
  FileAttachment 
} from '../../../utils/file-upload.utils'
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-claim',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  template: `
    <section class="bg-gradient-to-br from-assurantis-grayLighter to-white py-20">
      <div class="container-custom text-center">
        <h1 class="text-display mb-6">Déclarer un <span class="text-assurantis-red">Sinistre</span></h1>
        <p class="text-xl text-assurantis-gray max-w-3xl mx-auto leading-relaxed">
          Nous sommes là pour vous accompagner. Déclarez votre sinistre rapidement et suivez son traitement en temps réel.
        </p>
      </div>
    </section>

    <!-- Emergency Banner -->
    <section class="bg-assurantis-red text-white py-6">
      <div class="container-custom">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center space-x-4">
            <lucide-icon [img]="AlertCircleIcon" [size]="32"></lucide-icon>
            <div>
              <p class="font-semibold text-lg">En cas d'urgence</p>
              <p class="text-sm opacity-90">Accident grave, vol avec violence, incendie en cours</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="tel:112" class="bg-white text-assurantis-red px-6 py-3 rounded-xl font-semibold hover:bg-assurantis-grayLight transition-all flex items-center space-x-2">
              <lucide-icon [img]="PhoneIcon" [size]="20"></lucide-icon>
              <span>Urgences : 112</span>
            </a>
            <a href="tel:+32477790383" class="bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-assurantis-red transition-all flex items-center space-x-2">
              <lucide-icon [img]="PhoneIcon" [size]="20"></lucide-icon>
              <span>Assistance 24/7</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom max-w-5xl">
        <div class="grid lg:grid-cols-3 gap-8">
          
          <!-- Sidebar - Emergency Tips -->
          <div class="lg:col-span-1">
            <div class="card sticky top-24">
              <h3 class="text-h4 mb-6">Que faire en priorité ?</h3>
              
              <div class="space-y-6">
                <div>
                  <div class="flex items-start space-x-3 mb-2">
                    <span class="w-6 h-6 bg-assurantis-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                    <h4 class="font-semibold text-assurantis-grayDark">Sécurisez la situation</h4>
                  </div>
                  <p class="text-sm text-assurantis-gray ml-9">
                    Mettez-vous en sécurité et protégez les autres personnes impliquées.
                  </p>
                </div>

                <div>
                  <div class="flex items-start space-x-3 mb-2">
                    <span class="w-6 h-6 bg-assurantis-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                    <h4 class="font-semibold text-assurantis-grayDark">Appelez les secours si nécessaire</h4>
                  </div>
                  <p class="text-sm text-assurantis-gray ml-9">
                    Composez le 112 pour toute urgence médicale ou situation grave.
                  </p>
                </div>

                <div>
                  <div class="flex items-start space-x-3 mb-2">
                    <span class="w-6 h-6 bg-assurantis-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                    <h4 class="font-semibold text-assurantis-grayDark">Collectez les preuves</h4>
                  </div>
                  <p class="text-sm text-assurantis-gray ml-9">
                    Photos, témoignages, constat amiable... Rassemblez un maximum d'éléments.
                  </p>
                </div>

                <div>
                  <div class="flex items-start space-x-3 mb-2">
                    <span class="w-6 h-6 bg-assurantis-red text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                    <h4 class="font-semibold text-assurantis-grayDark">Déclarez rapidement</h4>
                  </div>
                  <p class="text-sm text-assurantis-gray ml-9">
                    Remplissez ce formulaire dans les 5 jours suivant le sinistre.
                  </p>
                </div>
              </div>

              <div class="mt-6 pt-6 border-t border-assurantis-grayLight">
                <p class="text-sm text-assurantis-gray mb-3">
                  <strong>Numéros utiles :</strong>
                </p>
                <ul class="text-sm text-assurantis-gray space-y-2">
                  <li>• Urgences : 112</li>
                  <li>• Police : 101</li>
                  <li>• Pompiers : 100</li>
                  <li>• Assistance ASSURANTIS : +32 477 79 03 83</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Main Form -->
          <div class="lg:col-span-2">
            <div class="card">
              <div class="flex items-center space-x-3 mb-6">
                <lucide-icon [img]="FileTextIcon" [size]="28" class="text-assurantis-red"></lucide-icon>
                <h2 class="text-h2">Formulaire de Déclaration</h2>
              </div>

              <form [formGroup]="claimForm" (ngSubmit)="onSubmit()" class="space-y-6">
                
                <!-- Personal Info -->
                <div>
                  <h3 class="text-h4 mb-4">Vos coordonnées</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Nom complet <span class="text-assurantis-red">*</span>
                      </label>
                      <input type="text" formControlName="name" class="input-field" placeholder="Jean Dupont">
                      <p *ngIf="isFieldInvalid('name')" class="text-red-500 text-sm mt-1">Le nom est requis</p>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Email <span class="text-assurantis-red">*</span>
                      </label>
                      <input type="email" formControlName="email" class="input-field" placeholder="jean@email.com">
                      <p *ngIf="isFieldInvalid('email')" class="text-red-500 text-sm mt-1">Email valide requis</p>
                    </div>
                  </div>
                  <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Téléphone <span class="text-assurantis-red">*</span>
                      </label>
                      <input type="tel" formControlName="phone" class="input-field" placeholder="+32 4XX XX XX XX">
                      <p *ngIf="isFieldInvalid('phone')" class="text-red-500 text-sm mt-1">Le téléphone est requis</p>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        N° de police <span class="text-assurantis-red">*</span>
                      </label>
                      <input type="text" formControlName="policyNumber" class="input-field" placeholder="POL-XXXXXXXX">
                      <p *ngIf="isFieldInvalid('policyNumber')" class="text-red-500 text-sm mt-1">Le numéro de police est requis</p>
                    </div>
                  </div>
                </div>

                <!-- Claim Details -->
                <div class="pt-6 border-t border-assurantis-grayLight">
                  <h3 class="text-h4 mb-4">Détails du sinistre</h3>
                  
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Type de sinistre <span class="text-assurantis-red">*</span>
                      </label>
                      <select formControlName="claimType" class="input-field">
                        <option value="">Sélectionnez un type</option>
                        <option value="Accident automobile">Accident automobile</option>
                        <option value="Incendie">Incendie</option>
                        <option value="Dégât des eaux">Dégât des eaux</option>
                        <option value="Vol">Vol</option>
                        <option value="Vandalisme">Vandalisme</option>
                        <option value="Responsabilité civile">Responsabilité civile</option>
                        <option value="Autre">Autre</option>
                      </select>
                      <p *ngIf="isFieldInvalid('claimType')" class="text-red-500 text-sm mt-1">Sélectionnez un type</p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                          Date du sinistre <span class="text-assurantis-red">*</span>
                        </label>
                        <input type="date" formControlName="claimDate" class="input-field">
                        <p *ngIf="isFieldInvalid('claimDate')" class="text-red-500 text-sm mt-1">La date est requise</p>
                      </div>
                      <div>
                        <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                          Heure approximative
                        </label>
                        <input type="time" formControlName="claimTime" class="input-field">
                      </div>
                    </div>

                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Lieu du sinistre <span class="text-assurantis-red">*</span>
                      </label>
                      <input type="text" formControlName="location" class="input-field" 
                             placeholder="Rue, ville, code postal">
                      <p *ngIf="isFieldInvalid('location')" class="text-red-500 text-sm mt-1">Le lieu est requis</p>
                    </div>

                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Description détaillée <span class="text-assurantis-red">*</span>
                      </label>
                      <textarea formControlName="description" class="input-field min-h-[150px] resize-y" 
                                placeholder="Décrivez les circonstances du sinistre, les dommages constatés, les personnes impliquées..."></textarea>
                      <p *ngIf="isFieldInvalid('description')" class="text-red-500 text-sm mt-1">La description est requise</p>
                    </div>

                    <div>
                      <label class="flex items-start space-x-3 cursor-pointer">
                        <input type="checkbox" formControlName="hasWitnesses" 
                               class="mt-1 w-5 h-5 text-assurantis-red rounded">
                        <span class="text-sm text-assurantis-grayDark">
                          Il y a des témoins
                        </span>
                      </label>
                    </div>

                    <div *ngIf="claimForm.get('hasWitnesses')?.value">
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Coordonnées des témoins
                      </label>
                      <textarea formControlName="witnesses" class="input-field min-h-[80px]" 
                                placeholder="Nom, téléphone, adresse des témoins..."></textarea>
                    </div>
                  </div>
                </div>

                <!-- Documents justificatifs -->
                <div class="pt-6 border-t border-assurantis-grayLight">
                  <h3 class="text-h4 mb-4">Documents justificatifs</h3>

                  <p class="text-sm text-assurantis-gray mb-4">
                    Photos, constat amiable, factures, rapport de police... (max 10 fichiers, 5MB chacun)
                  </p>

                  <!-- Upload Zone -->
                  <div
                    class="border-2 border-dashed border-assurantis-grayLight rounded-2xl p-8 text-center hover:border-assurantis-red transition-colors cursor-pointer"
                    (click)="fileInput.click()"
                    (dragover)="onDragOver($event)"
                    (dragleave)="onDragLeave($event)"
                    (drop)="onFileDrop($event)"
                    [class.border-assurantis-red]="isDragOver"
                    [class.bg-assurantis-grayLighter]="isDragOver"
                  >
                    <lucide-icon [img]="UploadIcon" [size]="48" class="text-assurantis-gray mx-auto mb-4"></lucide-icon>

                    <p class="text-assurantis-grayDark font-medium mb-2">
                      Cliquez pour ajouter des fichiers
                    </p>

                    <p class="text-sm text-assurantis-gray">
                      ou glissez-déposez vos documents ici
                    </p>

                    <p class="text-xs text-assurantis-gray mt-3">
                      Formats acceptés : JPG, PNG, GIF, PDF, DOCX, XLSX
                    </p>

                    <input
                      #fileInput
                      type="file"
                      multiple
                      accept="image/*,.pdf,.docx,.xlsx"
                      class="hidden"
                      (change)="onFileSelect($event)"
                    />
                  </div>

                  <!-- Liste des fichiers -->
                  <div *ngIf="uploadedFiles.length > 0" class="mt-4 space-y-2">
                    <p class="font-semibold text-sm text-assurantis-grayDark mb-2">
                      Fichiers sélectionnés ({{ uploadedFiles.length }}) :
                    </p>

                    <div *ngFor="let file of uploadedFiles; let i = index" 
                         class="flex items-center justify-between p-3 bg-assurantis-grayLighter rounded-lg">
                      <div class="flex items-center space-x-3 flex-1 min-w-0">
                        <span class="text-xl">📎</span>
                        <div class="flex-1 min-w-0">
                          <p class="text-sm font-medium text-assurantis-grayDark truncate">
                            {{ file.name }}
                          </p>
                          <p class="text-xs text-assurantis-gray">
                            {{ getFormattedFileSize(file.size) }}
                          </p>
                        </div>
                      </div>
                      <button type="button" (click)="removeFile(i)" 
                              class="text-red-500 hover:text-red-700 text-sm font-medium ml-3">
                        Supprimer
                      </button>
                    </div>
                  </div>

                  <p *ngIf="fileError" class="text-red-500 text-sm mt-2">
                    {{ fileError }}
                  </p>
                </div>

                <!-- Submit -->
                <div class="pt-6 border-t border-assurantis-grayLight">
                  <button type="submit" 
                          [disabled]="isSubmitting || !claimForm.valid"
                          class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed">
                    {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la déclaration' }}
                  </button>
                  <p class="text-xs text-assurantis-gray text-center mt-4">
                    En soumettant ce formulaire, vous déclarez que les informations fournies sont exactes et complètes.
                  </p>
                </div>
              </form>

              <!-- Success Message -->
              <div *ngIf="showSuccess" class="mt-6 p-6 bg-green-50 border border-green-200 rounded-2xl animate-fade-in">
                <h3 class="font-semibold text-green-800 mb-2">✓ Déclaration enregistrée</h3>
                <p class="text-green-700 text-sm mb-4">
                  Votre sinistre a été enregistré sous la référence <strong>{{ claimReference }}</strong>. 
                  Notre équipe va l'examiner et vous contacter sous 24-48h.
                </p>
                <p class="text-green-700 text-sm">
                  Vous recevrez un email de confirmation à l'adresse indiquée.
                </p>
              </div>

              <!-- Error Message -->
              <div *ngIf="showError" class="mt-6 p-6 bg-red-50 border border-red-200 rounded-2xl animate-fade-in">
                <h3 class="font-semibold text-red-800 mb-2">✗ Erreur lors de l'envoi</h3>
                <p class="text-red-700 text-sm">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ClaimComponent {
  readonly AlertCircleIcon = AlertCircle;
  readonly PhoneIcon = Phone;
  readonly FileTextIcon = FileText;
  readonly UploadIcon = Upload;

  claimForm: FormGroup;
  isSubmitting = false;
  showSuccess = false;
  showError = false;
  claimReference = '';
  errorMessage = '';

  isDragOver = false;
  uploadedFiles: File[] = [];
  fileError = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.claimForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      policyNumber: ['', Validators.required],
      claimType: ['', Validators.required],
      claimDate: ['', Validators.required],
      claimTime: [''],
      location: ['', Validators.required],
      description: ['', Validators.required],
      hasWitnesses: [false],
      witnesses: ['']
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.claimForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onFileDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    if (!event.dataTransfer?.files) return;
    this.addFiles(Array.from(event.dataTransfer.files));
  }

  onFileSelect(event: any) {
    const files: FileList = event.target.files;
    if (files) {
      this.addFiles(Array.from(files));
    }
  }

  private addFiles(files: File[]) {
    this.fileError = '';

    if (this.uploadedFiles.length + files.length > 10) {
      this.fileError = 'Maximum 10 fichiers autorisés';
      return;
    }

    this.uploadedFiles = [...this.uploadedFiles, ...files];
  }

  removeFile(index: number) {
    this.uploadedFiles.splice(index, 1);
    this.fileError = '';
  }

  getFormattedFileSize(bytes: number): string {
    return formatFileSize(bytes);
  }

  async onSubmit() {
    this.claimForm.markAllAsTouched();

    if (this.claimForm.valid) {
      this.isSubmitting = true;
      this.showSuccess = false;
      this.showError = false;
      this.fileError = '';

      try {
        const formData = this.claimForm.value;

        let message = `DÉCLARATION DE SINISTRE\n\n`;
        message += `Numéro de police : ${formData.policyNumber}\n`;
        message += `Type : ${formData.claimType}\n`;
        message += `Date : ${formData.claimDate}`;
        if (formData.claimTime) {
          message += ` à ${formData.claimTime}`;
        }
        message += `\nLieu : ${formData.location}\n\n`;
        message += `Description :\n${formData.description}\n`;
        if (formData.hasWitnesses && formData.witnesses) {
          message += `\nTémoins :\n${formData.witnesses}`;
        }

        const attachments: FileAttachment[] = await convertFilesToAttachments(this.uploadedFiles);

        const mailRequest = {
          mailType: 'CLAIM_REQUEST',
          appCode: 'ASSURANTIS',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.claimType,
          message: message,
          attachments: attachments,
          additionalData: {
            policyNumber: formData.policyNumber,
            claimDate: formData.claimDate,
            claimTime: formData.claimTime,
            location: formData.location
          }
        };

        sendMail(this.http, environment.apiUrl, { body: mailRequest })
          .subscribe({
            next: (response: any) => {
              this.isSubmitting = false;
              this.showSuccess = true;
              
              if (response && response.reference) {
                this.claimReference = response.reference;
              } else {
                this.claimReference = 'SIN-' + Date.now().toString().slice(-8);
              }
              
              this.claimForm.reset();
              this.uploadedFiles = [];

              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);

              setTimeout(() => {
                this.showSuccess = false;
                this.claimReference = '';
              }, 10000);
            },
            error: (error: any) => {
              console.error('Erreur lors de l\'envoi:', error);
              this.isSubmitting = false;
              this.showError = true;
              this.errorMessage = error.error?.message || 'Une erreur est survenue lors de l\'envoi de votre déclaration. Veuillez réessayer plus tard.';

              setTimeout(() => {
                this.showError = false;
              }, 5000);
            }
          });

      } catch (error: any) {
        console.error('Erreur de validation des fichiers:', error);
        this.isSubmitting = false;
        this.fileError = error.message || 'Erreur lors du traitement des fichiers';
      }
    }
  }
}