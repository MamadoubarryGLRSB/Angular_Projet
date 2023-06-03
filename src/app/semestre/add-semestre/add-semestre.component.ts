import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Semestre } from 'src/app/shared/models/semestre';
import { SemestreService } from 'src/app/shared/service/semestre.service';

@Component({
  selector: 'app-add-semestre',
  templateUrl: './add-semestre.component.html',
  styleUrls: ['./add-semestre.component.css']
})
export class AddSemestreComponent {

  nouveauSemestre: Semestre = { id: 0, libelle: '', coursList: [] };
  champsVides = false;

  messageAjout: string = '';


  constructor(private semestreService: SemestreService, private router: Router) {}


  ajouterSemestre() {
    if (this.formulaireValide()) {
      this.semestreService.ajouterSemestre(this.nouveauSemestre).subscribe(
        response => {
          // Traitement en cas de succès
          console.log('Semestre ajouté avec succès', response);
          this.messageAjout = 'Semestre ajouté avec succès.';
          // Réinitialisez le formulaire
          this.nouveauSemestre = { id: 0, libelle: '', coursList: [] };
          this.champsVides = false; // Réinitialisez le message d'erreur
          setTimeout(() => {
            // Redirection vers la liste principale
            this.router.navigate(['/semestre']);
          }, 2000); // Délai de 2 secondes avant la redirection
        },
        error => {
          // Traitement en cas d'erreur
          console.error('Erreur lors de l\'ajout du semestre', error);
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
    return !!this.nouveauSemestre.libelle;
  }

}
