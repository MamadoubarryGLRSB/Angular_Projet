import { Component, OnInit } from '@angular/core';
import { Semestre } from '../shared/models/semestre';
import { SemestreService } from '../shared/service/semestre.service';

@Component({
  selector: 'app-semestre',
  templateUrl: './semestre.component.html',
 
})
export class SemestreComponent implements OnInit {

  semestres: Semestre[] = [];
  erreurSuppression: string | null = null;
  constructor(private semestreService: SemestreService) { }

  ngOnInit(): void {
    this.getSemestres();
  }

  getSemestres(): void {
    this.semestreService.getSemestres()
      .subscribe(semestres => this.semestres = semestres);
  }

 

  confirmerSuppression(semestreId: number) {
    console.log('ID du semestre à supprimer :', semestreId);
    if (confirm("Êtes-vous sûr de vouloir supprimer ce semestre ?")) {
      this.semestreService.supprimerSemestre(semestreId).subscribe(
        () => {
          console.log('Semestre supprimé avec succès');
          this.getSemestres(); // Rafraîchir la liste des semestres après suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression du semestre', error);
          this.erreurSuppression = 'Impossible de supprimer le semestre en raison de dépendances.';
        }
      );
    }
  }
  

}
