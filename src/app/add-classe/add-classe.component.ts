import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Classe } from 'src/app/shared/models/classe';
import { ClasseService } from '../shared/service/classe.service';



@Component({
  selector: 'app-add-classe',
  templateUrl: './add-classe.component.html',
  styleUrls: ['./add-classe.component.css']
})
export class AddClasseComponent {
 
 nouvelleClasse: Classe = { id: 0, libelle: '', niveau: '', filiere: '' };
  champsVides = false;
  messageAjout: string = '';


  constructor(private classeService: ClasseService,private router:Router) {}

  ajouterClasse() {
    if (this.formulaireValide()) {
      this.classeService.enregistrerClasse(this.nouvelleClasse).subscribe(
        response => {
          // Traitement en cas de succès
          console.log('Semestre ajouté avec succès', response);
          this.messageAjout = 'Classe ajouté avec succès.';
          // Réinitialisez le formulaire
          this.nouvelleClasse = { id: 0, libelle: '', niveau: '', filiere: '' };
          this.champsVides = false; // Réinitialisez le message d'erreur
  
          // Ajoutez un délai avant la redirection (par exemple, 2 secondes)
          setTimeout(() => {
            // Redirection vers la liste des classes
            this.router.navigate(['/classe']);
          }, 3000); // Délai de 2 secondes avant la redirection
        },
        error => {
          // Traitement en cas d'erreur
          console.error('Erreur lors de l\'enregistrement de la classe', error);
        }
      );
    } else {
      this.champsVides = true; // Afficher le message d'erreur
    }
  }
  
  
  

  formulaireValide(): boolean {
    // Vérifiez si tous les champs obligatoires sont remplis
    return (
      !!this.nouvelleClasse.libelle &&
      !!this.nouvelleClasse.niveau &&
      !!this.nouvelleClasse.filiere
    );
  }
}
