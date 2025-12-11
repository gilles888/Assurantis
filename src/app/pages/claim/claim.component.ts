import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, AlertCircle, Phone, FileText, Upload } from 'lucide-angular';

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
            <a href="tel:+32123456789" class="bg-white/20 text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-assurantis-red transition-all flex items-center space-x-2">
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
                  <li>• Assistance ASSURANTIS : +32 1 234 56 789</li>
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
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Email <span class="text-assurantis-red">*</span>
                      </label>
                      <input type="email" formControlName="email" class="input-field" placeholder="jean@email.com">
                    </div>
                  </div>
                  <div class="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Téléphone <span class="text-assurantis-red">*</span>
                      </label>
                      <input type="tel" formControlName="phone" class="input-field" placeholder="+32 4XX XX XX XX">
                    </div>
                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        N° de police <span class="text-assurantis-red">*</span>
                      </label>
                      <input type="text" formControlName="policyNumber" class="input-field" placeholder="POL-XXXXXXXX">
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
                        <option value="auto">Accident automobile</option>
                        <option value="fire">Incendie</option>
                        <option value="water">Dégât des eaux</option>
                        <option value="theft">Vol</option>
                        <option value="vandalism">Vandalisme</option>
                        <option value="liability">Responsabilité civile</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>

                    <div class="grid md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                          Date du sinistre <span class="text-assurantis-red">*</span>
                        </label>
                        <input type="date" formControlName="claimDate" class="input-field">
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
                    </div>

                    <div>
                      <label class="block text-sm font-semibold text-assurantis-grayDark mb-2">
                        Description détaillée <span class="text-assurantis-red">*</span>
                      </label>
                      <textarea formControlName="description" class="input-field min-h-[150px] resize-y" 
                                placeholder="Décrivez les circonstances du sinistre, les dommages constatés, les personnes impliquées..."></textarea>
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
    Photos, constat amiable, factures, rapport de police...
  </p>

  <!-- Upload Zone -->
  <div
    class="border-2 border-dashed border-assurantis-grayLight rounded-2xl p-8 text-center hover:border-assurantis-red transition-colors cursor-pointer"
    (click)="fileInput.click()"
    (dragover)="onDragOver($event)"
    (dragleave)="onDragLeave($event)"
    (drop)="onFileDrop($event)"
    [class.border-assurantis-red]="isDragOver"
  >
    <lucide-icon [img]="UploadIcon" [size]="48" class="text-assurantis-gray mx-auto mb-4"></lucide-icon>

    <p class="text-assurantis-grayDark font-medium mb-2">
      Cliquez pour ajouter des fichiers
    </p>

    <p class="text-sm text-assurantis-gray">
      ou glissez-déposez vos documents ici
    </p>

    <p class="text-xs text-assurantis-gray mt-3">
      Formats acceptés : JPG, PNG, PDF (max 10MB par fichier)
    </p>

    <!-- Hidden file input -->
    <input
      #fileInput
      type="file"
      multiple
      accept=".jpg,.jpeg,.png,.pdf"
      class="hidden"
      (change)="onFileSelect($event)"
    />
  </div>

  <!-- Liste des fichiers -->
  <div *ngIf="uploadedFiles.length > 0" class="mt-4 p-4 border rounded-xl bg-assurantis-grayLighter">
    <p class="font-semibold text-sm text-assurantis-grayDark mb-2">
      Fichiers sélectionnés :
    </p>

    <ul class="space-y-1 text-xs text-assurantis-gray">
      <li *ngFor="let file of uploadedFiles; let i = index" class="flex items-center justify-between">
        <span>• {{ file.name }} ({{ file.size | number }} octets)</span>
        <button type="button" (click)="removeFile(i)" class="text-assurantis-red hover:underline ml-2 text-xs">
          Supprimer
        </button>
      </li>
    </ul>
  </div>
</div>
                <!-- Documents Upload (Mock) 
                <div class="pt-6 border-t border-assurantis-grayLight">
                  <h3 class="text-h4 mb-4">Documents justificatifs</h3>
                  <p class="text-sm text-assurantis-gray mb-4">
                    Photos, constat amiable, factures, rapport de police...
                  </p>
                  
                  <div class="border-2 border-dashed border-assurantis-grayLight rounded-2xl p-8 text-center hover:border-assurantis-red transition-colors cursor-pointer">
                    <lucide-icon [img]="UploadIcon" [size]="48" class="text-assurantis-gray mx-auto mb-4"></lucide-icon>
                    <p class="text-assurantis-grayDark font-medium mb-2">
                      Cliquez pour ajouter des fichiers
                    </p>
                    <p class="text-sm text-assurantis-gray">
                      ou glissez-déposez vos documents ici
                    </p>
                    <p class="text-xs text-assurantis-gray mt-3">
                      Formats acceptés : JPG, PNG, PDF (max 10MB par fichier)
                    </p>
                  </div>
                </div>-->
                

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
                  Votre sinistre a été enregistré sous la référence <strong>SIN-{{ claimReference }}</strong>. 
                  Notre équipe va l'examiner et vous contacter sous 24-48h.
                </p>
                <p class="text-green-700 text-sm">
                  Vous recevrez un email de confirmation à l'adresse indiquée.
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
  claimReference = '';

  constructor(private fb: FormBuilder) {
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

  async onSubmit() {
    this.claimForm.markAllAsTouched();

    if (this.claimForm.valid) {
      this.isSubmitting = true;
      
      // Simuler un envoi (pas de backend)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.claimReference = Date.now().toString().slice(-8);
      this.isSubmitting = false;
      this.showSuccess = true;
      
      // Scroll to success message
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  }
  //Add

  isDragOver = false;
uploadedFiles: File[] = [];

onDragOver(event: DragEvent) {
  event.preventDefault();
  this.isDragOver = true;
}

onDragLeave(event: DragEvent) {
  event.preventDefault();
  this.isDragOver = false;
}

onFileDrop(event: DragEvent) {
  event.preventDefault();
  this.isDragOver = false;

  if (!event.dataTransfer?.files) return;

  this.addFiles(event.dataTransfer.files);
}

onFileSelect(event: any) {
  const files: FileList = event.target.files;
  this.addFiles(files);
}

removeFile(index: number) {
  this.uploadedFiles.splice(index, 1);
}

private addFiles(files: FileList) {
  Array.from(files).forEach(file => {
    // Vérifier taille < 10MB
    if (file.size > 10 * 1024 * 1024) {
      alert(`Le fichier ${file.name} dépasse 10MB`);
      return;
    }

    // Vérifier type
    if (!['image/jpeg', 'image/png', 'application/pdf'].includes(file.type)) {
      alert(`Le fichier ${file.name} a un format non autorisé`);
      return;
    }

    this.uploadedFiles.push(file);
  });
}

}