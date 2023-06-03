import { Component } from '@angular/core';
import { Etudiant } from '../shared/models/etudiant';
import { EtudiantService } from '../shared/service/etudiant.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  etudiants: Etudiant[] = [];
  erreurSuppression: string | null = null;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants(): void {
    this.etudiantService.getAllEtudiants()
      .subscribe(etudiants => this.etudiants = etudiants);
  }

  confirmerSuppression(etudiantId: number) {
    console.log('ID de l\'étudiant à supprimer :', etudiantId);
    if (confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?")) {
      this.etudiantService.deleteEtudiant(etudiantId).subscribe(
        () => {
          console.log('Etudiant supprimé avec succès');
          this.getEtudiants(); // Rafraîchir la liste des étudiants après suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'étudiant', error);
          this.erreurSuppression = 'Impossible de supprimer l\'étudiant en raison de dépendances.';
        }
      );
    }
  }
}
