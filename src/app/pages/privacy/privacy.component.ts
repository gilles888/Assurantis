import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-br from-assurantis-grayLighter to-white py-20">
      <div class="container-custom text-center max-w-4xl">
        <h1 class="text-display mb-6">Politique de <span class="text-assurantis-red">Confidentialité</span></h1>
        <p class="text-lg text-assurantis-gray">
          Dernière mise à jour : Octobre 2025
        </p>
      </div>
    </section>

    <section class="section-padding bg-white">
      <div class="container-custom max-w-4xl prose prose-lg">
        
        <div class="card mb-8">
          <h2 class="text-h2 mb-4">Introduction</h2>
          <p class="text-assurantis-gray leading-relaxed">
            ASSURANTIS s'engage à protéger la vie privée de ses clients et visiteurs. Cette politique de confidentialité 
            explique comment nous collectons, utilisons, partageons et protégeons vos données personnelles conformément 
            au Règlement Général sur la Protection des Données (RGPD) et à la législation belge en vigueur.
          </p>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">1. Responsable du traitement</h2>
          <p class="text-assurantis-gray leading-relaxed mb-4">
            Le responsable du traitement de vos données personnelles est :
          </p>
          <div class="bg-assurantis-grayLighter rounded-xl p-6">
            <p class="text-assurantis-grayDark mb-2"><strong>ASSURANTIS SPRL</strong></p>
            <p class="text-assurantis-gray text-sm">Rue de l'Exemple 123, 1000 Bruxelles, Belgique</p>
            <p class="text-assurantis-gray text-sm">Email : privacy&#64;assurantis.be</p>
            <p class="text-assurantis-gray text-sm">Téléphone : +32 1 234 56 789</p>
            <p class="text-assurantis-gray text-sm">N° d'entreprise : BE XXXX.XXX.XXX</p>
          </div>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">2. Données collectées</h2>
          <p class="text-assurantis-gray leading-relaxed mb-4">
            Nous collectons différentes catégories de données selon vos interactions avec nos services :
          </p>
          
          <h3 class="text-h4 mb-3">Données d'identification</h3>
          <ul class="list-disc list-inside text-assurantis-gray space-y-2 mb-6">
            <li>Nom, prénom, date de naissance</li>
            <li>Adresse postale, email, numéro de téléphone</li>
            <li>Numéro de registre national (si nécessaire)</li>
          </ul>

          <h3 class="text-h4 mb-3">Données contractuelles</h3>
          <ul class="list-disc list-inside text-assurantis-gray space-y-2 mb-6">
            <li>Informations sur les contrats d'assurance</li>
            <li>Historique de sinistres</li>
            <li>Données bancaires pour les paiements</li>
          </ul>

          <h3 class="text-h4 mb-3">Données de navigation</h3>
          <ul class="list-disc list-inside text-assurantis-gray space-y-2">
            <li>Adresse IP, type de navigateur, système d'exploitation</li>
            <li>Pages visitées, durée de visite</li>
            <li>Cookies et technologies similaires</li>
          </ul>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">3. Finalités du traitement</h2>
          <p class="text-assurantis-gray leading-relaxed mb-4">
            Vos données sont traitées pour les finalités suivantes :
          </p>
          <ul class="space-y-3">
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray"><strong>Gestion des contrats :</strong> Établissement, exécution et gestion de vos contrats d'assurance</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray"><strong>Gestion des sinistres :</strong> Traitement et suivi de vos déclarations de sinistre</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray"><strong>Service client :</strong> Réponse à vos demandes, conseils personnalisés</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray"><strong>Marketing :</strong> Communication d'offres adaptées (avec votre consentement)</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray"><strong>Obligations légales :</strong> Respect des réglementations en vigueur</span>
            </li>
          </ul>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">4. Base légale du traitement</h2>
          <p class="text-assurantis-gray leading-relaxed">
            Le traitement de vos données repose sur :
          </p>
          <ul class="space-y-2 mt-4">
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">L'exécution du contrat d'assurance</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Le respect d'obligations légales</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Votre consentement (marketing, cookies non essentiels)</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Nos intérêts légitimes (amélioration des services, prévention de la fraude)</span>
            </li>
          </ul>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">5. Partage des données</h2>
          <p class="text-assurantis-gray leading-relaxed mb-4">
            Vos données peuvent être partagées avec :
          </p>
          <ul class="space-y-2">
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray"><strong>Compagnies d'assurance :</strong> Pour l'établissement et la gestion de vos contrats</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray"><strong>Prestataires de services :</strong> Hébergement, maintenance IT, traitement des paiements</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray"><strong>Autorités compétentes :</strong> En cas d'obligation légale ou de demande judiciaire</span>
            </li>
          </ul>
          <p class="text-assurantis-gray leading-relaxed mt-4 text-sm">
            Tous nos partenaires sont tenus de respecter la confidentialité de vos données et de se conformer au RGPD.
          </p>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">6. Durée de conservation</h2>
          <p class="text-assurantis-gray leading-relaxed mb-4">
            Nous conservons vos données pendant les durées suivantes :
          </p>
          <ul class="space-y-2">
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Données contractuelles : Durée du contrat + 10 ans (prescription légale)</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Données de prospection : 3 ans après le dernier contact</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Données de navigation : 13 mois maximum</span>
            </li>
          </ul>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">7. Vos droits</h2>
          <p class="text-assurantis-gray leading-relaxed mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-assurantis-grayLighter rounded-xl p-4">
              <h4 class="font-semibold text-assurantis-grayDark mb-2">✓ Droit d'accès</h4>
              <p class="text-sm text-assurantis-gray">Obtenir une copie de vos données</p>
            </div>
            <div class="bg-assurantis-grayLighter rounded-xl p-4">
              <h4 class="font-semibold text-assurantis-grayDark mb-2">✓ Droit de rectification</h4>
              <p class="text-sm text-assurantis-gray">Corriger vos données inexactes</p>
            </div>
            <div class="bg-assurantis-grayLighter rounded-xl p-4">
              <h4 class="font-semibold text-assurantis-grayDark mb-2">✓ Droit à l'effacement</h4>
              <p class="text-sm text-assurantis-gray">Demander la suppression de vos données</p>
            </div>
            <div class="bg-assurantis-grayLighter rounded-xl p-4">
              <h4 class="font-semibold text-assurantis-grayDark mb-2">✓ Droit à la limitation</h4>
              <p class="text-sm text-assurantis-gray">Limiter le traitement de vos données</p>
            </div>
            <div class="bg-assurantis-grayLighter rounded-xl p-4">
              <h4 class="font-semibold text-assurantis-grayDark mb-2">✓ Droit à la portabilité</h4>
              <p class="text-sm text-sm text-assurantis-gray">Recevoir vos données dans un format structuré</p>
            </div>
            <div class="bg-assurantis-grayLighter rounded-xl p-4">
              <h4 class="font-semibold text-assurantis-grayDark mb-2">✓ Droit d'opposition</h4>
              <p class="text-sm text-assurantis-gray">S'opposer au traitement de vos données</p>
            </div>
          </div>
          <p class="text-assurantis-gray leading-relaxed mt-6">
            Pour exercer vos droits, contactez-nous à <a href="mailto:privacy@assurantis.be" class="text-assurantis-red underline">privacy&#64;assurantis.be</a> ou par courrier à l'adresse indiquée ci-dessus.
          </p>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">8. Sécurité des données</h2>
          <p class="text-assurantis-gray leading-relaxed">
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
            contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction :
          </p>
          <ul class="space-y-2 mt-4">
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Chiffrement des données sensibles (SSL/TLS)</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Contrôle d'accès strict et authentification forte</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Sauvegardes régulières et plan de continuité</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-assurantis-red mt-1">•</span>
              <span class="text-assurantis-gray">Formation continue de notre personnel</span>
            </li>
          </ul>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">9. Cookies</h2>
          <p class="text-assurantis-gray leading-relaxed mb-4">
            Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences de cookies 
            à tout moment via les paramètres de votre navigateur.
          </p>
          <div class="bg-assurantis-grayLighter rounded-xl p-6">
            <p class="text-sm text-assurantis-grayDark mb-2"><strong>Types de cookies utilisés :</strong></p>
            <ul class="text-sm text-assurantis-gray space-y-1">
              <li>• Cookies essentiels (fonctionnement du site)</li>
              <li>• Cookies analytiques (Google Analytics)</li>
              <li>• Cookies de personnalisation (préférences utilisateur)</li>
            </ul>
          </div>
        </div>

        <div class="card mb-8">
          <h2 class="text-h2 mb-4">10. Modifications</h2>
          <p class="text-assurantis-gray leading-relaxed">
            Cette politique de confidentialité peut être modifiée occasionnellement. Nous vous informerons de tout 
            changement important par email ou via une notification sur notre site. La date de dernière mise à jour 
            est indiquée en haut de cette page.
          </p>
        </div>

        <div class="card bg-assurantis-grayLighter">
          <h2 class="text-h2 mb-4">Contact</h2>
          <p class="text-assurantis-gray leading-relaxed mb-4">
            Pour toute question concernant cette politique de confidentialité ou le traitement de vos données :
          </p>
          <p class="text-assurantis-grayDark">
            <strong>Email :</strong> <a href="mailto:privacy@assurantis.be" class="text-assurantis-red underline">privacy&#64;assurantis.be</a><br>
            <strong>Téléphone :</strong> +32 1 234 56 789<br>
            <strong>Courrier :</strong> ASSURANTIS SPRL, Rue de l'Exemple 123, 1000 Bruxelles
          </p>
          <p class="text-sm text-assurantis-gray mt-4">
            Vous avez également le droit d'introduire une réclamation auprès de l'Autorité de Protection des Données (APD) : 
            <a href="https://www.autoriteprotectiondonnees.be" target="_blank" class="text-assurantis-red underline">www.autoriteprotectiondonnees.be</a>
          </p>
        </div>

      </div>
    </section>
  `,
  styles: []
})
export class PrivacyComponent {}