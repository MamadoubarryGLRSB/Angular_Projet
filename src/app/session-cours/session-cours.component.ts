import { Component, OnInit } from '@angular/core';

import { SessionCoursService } from '../shared/service/sessionCours.service';
import { SessionCours  } from '../shared/models/sessionCours';

@Component({
  selector: 'app-session-cours',
  templateUrl: './session-cours.component.html',
  styleUrls: ['./session-cours.component.css']
})
export class SessionCoursComponent implements OnInit {

  sessionsCours: SessionCours [] = [];
  erreurSuppression: string | null = null;

  

  constructor(private sessionCoursService: SessionCoursService) { }

  ngOnInit(): void {
    this.getSessionsCours();
  }


  
  getSessionsCours(): void {
    this.sessionCoursService.getSessionsCours()
      .subscribe(sessionsCours => this.sessionsCours = sessionsCours);
  }

  confirmerSuppression(sessionCoursId: number) {
    console.log('ID de la session de cours à annuler :', sessionCoursId);
    if (confirm("Êtes-vous sûr de vouloir annuler cette session de cours ?")) {
      this.sessionCoursService.deleteSessionCours(sessionCoursId).subscribe(
        () => {
          console.log('Session de cours annulée avec succès');
          this.getSessionsCours(); // Rafraîchir la liste des sessions de cours après annulation
        },
        (error) => {
          console.error('Erreur lors de la suppression du semestre', error);
          this.erreurSuppression = 'Impossible de supprimer le semestre en raison de dépendances.';
        }
      );
    }
  }

  calculerHeureFin(heureDebut: number, nbreHeures: number): string {
    const heureFin = heureDebut + nbreHeures;
    return this.formatHeure(heureFin);
  }
  
  formatHeure(heure: number): string {
    const heureString = heure.toString().padStart(2, '0');
    return `${heureString}:00`;
  }
  
  annulerSessionCours(sessionCours: SessionCours): void {
    if (sessionCours.id !== null) {
      const nouvelEtat = (sessionCours.id, 'Annuler');
      this.sessionCoursService.changerEtatSessionCours(sessionCours.id, nouvelEtat)
        .subscribe(
          () => {
            console.log('État de la session de cours modifié avec succès');
            this.getSessionsCours(); // Rafraîchir la liste des sessions de cours après modification de l'état
          },
          error => {
            console.error('Erreur lors de la modification de l\'état de la session de cours', error);
          }
        );
    } else {
      console.error('Erreur : ID de session de cours invalide');
    }
  }

  sessionChange(sessionCours: SessionCours): void {
    if (sessionCours.id !== null) {
      const nouvelEtat = (sessionCours.id, 'En Ligne')
      this.sessionCoursService.session(sessionCours.id, nouvelEtat)
        .subscribe(
          () => {
            console.log('État de la session de cours modifié avec succès');
            this.getSessionsCours(); // Rafraîchir la liste des sessions de cours après modification de l'état
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

  
  


