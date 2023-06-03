import { Component } from '@angular/core';
import { Salle } from '../shared/models/salle';
import { SalleService } from '../shared/service/salle.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent {
  
  salles: Salle[] = [];
  erreurSuppression: string | null = null;

  constructor(private salleService: SalleService) { }

  ngOnInit(): void {
    this.getSalles();
  }

  getSalles(): void {
    this.salleService.getSalles()
      .subscribe(salles => this.salles = salles);
  }

  confirmerSuppression(salleId: number) {
    console.log('ID de la salle à supprimer :', salleId);
    if (confirm("Êtes-vous sûr de vouloir supprimer cette salle ?")) {
      this.salleService.supprimerSalle(salleId).subscribe(
        () => {
          console.log('Salle supprimée avec succès');
          this.getSalles(); // Rafraîchir la liste des salles après suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression de la salle', error);
          this.erreurSuppression = 'Impossible de supprimer la salle en raison de dépendances.';
        }
      );
    }
  }

}
