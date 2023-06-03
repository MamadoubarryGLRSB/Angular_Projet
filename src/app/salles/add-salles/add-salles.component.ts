import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/app/shared/models/salle';
import { SalleService } from 'src/app/shared/service/salle.service';

@Component({
  selector: 'app-add-salles',
  templateUrl: './add-salles.component.html',
  styleUrls: ['./add-salles.component.css']
})
export class AddSallesComponent {
  nouvelleSalle: Salle = { id: 0, numero: 0, nombrePlace: 0 };
  champsVides = false;
  messageAjout: string = '';

  constructor(private salleService: SalleService, private router: Router) {}

  ajouterSalle() {
    if (this.formulaireValide()) {
      this.salleService.ajouterSalle(this.nouvelleSalle).subscribe(
        response => {
          console.log('Salle ajoutée avec succès', response);
          this.messageAjout = 'Salle ajoutée avec succès.';
          this.nouvelleSalle = { id: 0, numero: 0, nombrePlace: 0 };
          this.champsVides = false;
          setTimeout(() => {
            this.router.navigate(['/salles']);
          }, 2000);
        },
        error => {
          console.error('Erreur lors de l\'ajout de la salle', error);
          this.messageAjout = '';
        }
      );
    } else {
      this.champsVides = true;
      this.messageAjout = '';
    }
  }

  formulaireValide(): boolean {
    return !!this.nouvelleSalle.numero && this.nouvelleSalle.nombrePlace > 0;
  }


}
