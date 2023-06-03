import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from 'src/app/shared/models/module';
import { ModuleService } from 'src/app/shared/service/module.service';

@Component({
  selector: 'app-add-modules',
  templateUrl: './add-modules.component.html',
  styleUrls: ['./add-modules.component.css']
})
export class AddModulesComponent {
  nouveauModule: Module = { id: 0, libelle: '' };
  champsVides = false;

  messageAjout: string = '';

  constructor(private moduleService: ModuleService, private router: Router) {}

  ajouterModule() {
    if (this.formulaireValide()) {
      this.moduleService.ajoutModule(this.nouveauModule).subscribe(
        response => {
          // Traitement en cas de succès
          console.log('Module ajouté avec succès', response);
          this.messageAjout = 'Module ajouté avec succès.';
          // Réinitialisez le formulaire
          this.nouveauModule = { id: 0, libelle: '' };
          this.champsVides = false; // Réinitialisez le message d'erreur
          setTimeout(() => {
            // Redirection vers la liste principale
            this.router.navigate(['/modules']);
          }, 2000); // Délai de 2 secondes avant la redirection
        },
        error => {
          // Traitement en cas d'erreur
          console.error('Erreur lors de l\'ajout du module', error);
          this.messageAjout = '';
        }
      );
    } else {
      this.champsVides = true; // Afficher le message d'erreur
      this.messageAjout = '';
    }
  }
  
  formulaireValide(): boolean {
    // Vérifiez si tous les champs obligatoires sont remplis
    return !!this.nouveauModule.libelle;
  }

}
