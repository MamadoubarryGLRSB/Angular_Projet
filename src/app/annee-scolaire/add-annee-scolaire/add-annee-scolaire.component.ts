import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AnneeScolaire } from 'src/app/shared/models/annee';
import { AnneeScolaireService } from 'src/app/shared/service/anneeScolaire.service';

@Component({
  selector: 'app-add-annee-scolaire',
  templateUrl: './add-annee-scolaire.component.html',
  styleUrls: ['./add-annee-scolaire.component.css']
})
export class AddAnneeScolaireComponent {

  nouvelleAnnee: AnneeScolaire = {
    id: 0,
    dateDebut: '',
    dateFin: ''
  };
  champsVides = false;
  messageAjout: string = '';

  constructor(private anneeService: AnneeScolaireService,private router:Router) {}

  ajouterAnneeScolaire() {
    if (this.formulaireValide()) {
      // Convertir les dates de type string en objets Date
      const dateDebut = new Date(this.nouvelleAnnee.dateDebut);
      const dateFin = new Date(this.nouvelleAnnee.dateFin);

      this.nouvelleAnnee.dateDebut = dateDebut.toISOString();
      this.nouvelleAnnee.dateFin = dateFin.toISOString();

      this.anneeService.ajouterAnneeScolaire(this.nouvelleAnnee).subscribe(
        response => {
          console.log('Année scolaire ajoutée avec succès', response);
          this.messageAjout = 'Année scolaire ajoutée avec succès.';
          this.nouvelleAnnee = { id: 0, dateDebut: '', dateFin: '' };
          this.champsVides = false;
          this.router.navigate(['/anneeScolaire']);

        },
        error => {
          console.error('Erreur lors de l\'ajout de l\'année scolaire', error);
          this.messageAjout = '';
        }
      );
    } else {
      this.champsVides = true;
      this.messageAjout = '';
    }
  }

  formulaireValide(): boolean {
    return !!this.nouvelleAnnee.dateDebut && !!this.nouvelleAnnee.dateFin;
  }

}
