import { Component } from '@angular/core';
import { ProfesseurDTO } from '../shared/models/professeur';
import { ProfesseurService } from '../shared/service/prof.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent {
  professeurs: ProfesseurDTO[] = [];
  erreurSuppression: string | null = null;

  constructor(private professeurService: ProfesseurService) { }

  ngOnInit(): void {
    this.getProfesseurs();
  }

  getProfesseurs(): void {
    this.professeurService.getAllProfesseurs()
      .subscribe(professeurs => this.professeurs = professeurs);
  }

  confirmerSuppression(professeurId: number) {
    console.log('ID du professeur à supprimer :', professeurId);
    if (confirm("Êtes-vous sûr de vouloir supprimer ce professeur ?")) {
      this.professeurService.deleteProfesseur(professeurId).subscribe(
        () => {
          console.log('Professeur supprimé avec succès');
          this.getProfesseurs(); // Rafraîchir la liste des professeurs après suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression du professeur', error);
          this.erreurSuppression = 'Impossible de supprimer le professeur en raison de dépendances.';
        }
      );
    }
  }

}
