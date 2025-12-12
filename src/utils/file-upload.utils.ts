// Fichier à créer : src/app/utils/file-upload.utils.ts
// (ou ajuster le chemin selon votre structure de projet)

/**
 * Utilitaires pour la gestion des fichiers dans Angular
 */

export interface FileAttachment {
  filename: string;
  content: string; // Base64
  mimeType: string;
  description?: string;
}

/**
 * Convertit un fichier en Base64
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      const base64 = reader.result as string;
      // Retirer le préfixe "data:image/jpeg;base64," etc.
      const base64Content = base64.split(',')[1];
      resolve(base64Content);
    };
    
    reader.onerror = () => {
      reject(new Error('Erreur lors de la lecture du fichier'));
    };
    
    reader.readAsDataURL(file);
  });
}

/**
 * Valide un fichier avant l'envoi
 */
export function validateFile(file: File): { valid: boolean; error?: string } {
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

  if (file.size > MAX_SIZE) {
    return {
      valid: false,
      error: `Le fichier "${file.name}" dépasse la taille maximale de 5MB`
    };
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: `Le type de fichier "${file.type}" n'est pas autorisé`
    };
  }

  return { valid: true };
}

/**
 * Convertit un tableau de fichiers en attachements
 */
export async function convertFilesToAttachments(files: File[]): Promise<FileAttachment[]> {
  const attachments: FileAttachment[] = [];

  for (const file of files) {
    const validation = validateFile(file);
    if (!validation.valid) {
      throw new Error(validation.error);
    }

    const base64Content = await fileToBase64(file);
    
    attachments.push({
      filename: file.name,
      content: base64Content,
      mimeType: file.type,
      description: ''
    });
  }

  return attachments;
}

/**
 * Formate la taille du fichier en format lisible
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Obtient l'icône appropriée selon le type de fichier
 */
export function getFileIcon(mimeType: string): string {
  if (mimeType.startsWith('image/')) return '🖼️';
  if (mimeType === 'application/pdf') return '📄';
  if (mimeType.includes('word')) return '📝';
  if (mimeType.includes('sheet')) return '📊';
  return '📎';
}