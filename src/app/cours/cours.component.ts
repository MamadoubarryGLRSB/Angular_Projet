import { Component, OnInit } from '@angular/core';
import { Cours } from '../shared/models/cours';
import { CoursService } from '../shared/service/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit  {
  erreurSuppression: string | null = null;
  cours: Cours[] = [];
  filteredCours: Cours[] = [];

  constructor(private coursService: CoursService) { }

  ngOnInit(): void {
    this.getCours();
  }

  getCours(): void {
    this.coursService.getAllCours().subscribe(cours => {
      this.cours = cours;
      this.filteredCours = cours; // Initialise les cours filtrés avec tous les cours
    });
  }

  filtrerEnCours(): void {
    this.filteredCours = this.cours.filter(cours => cours.etat.toLowerCase() === 'en cours');
  }

  filtrerTermines(): void {
    this.filteredCours = this.cours.filter(cours => cours.etat.toLowerCase() === 'terminé');
  }
  afficherTous(): void {
    this.filteredCours = this.cours;
  }

  annulerSessionCours(sessionCours: Cours): void {
    if (sessionCours.id !== null) {
      const nouvelEtat = 'Annuler';
      this.coursService.changerEtatSessionCours(sessionCours.id, nouvelEtat)
        .subscribe(
          () => {
            console.log('État de la session de cours modifié avec succès');
            this.getCours(); // Rafraîchir la liste des sessions de cours après modification de l'état
          },
          error => {
            console.error('Erreur lors de la modification de l\'état de la session de cours', error);
          }
        );
    } else {
      console.error('Erreur : ID de session de cours invalide');
    }
  }

  sessionChange(sessionCours: Cours): void {
    if (sessionCours.id !== null) {
      const nouvelEtat = 'Terminer';
      this.coursService.session(sessionCours.id, nouvelEtat)
        .subscribe(
          () => {
            console.log('État de la session de cours modifié avec succès');
            this.getCours(); // Rafraîchir la liste des sessions de cours après modification de l'état
          },
          error => {
            console.error('Erreur lors de la modification de l\'état de la session de cours', error);
          }
        );
    } else {
      console.error('Erreur : ID de session de cours invalide');
    }
  }
}
