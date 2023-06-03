import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Semestre } from 'src/app/shared/models/semestre';
import { SemestreService } from 'src/app/shared/service/semestre.service';

@Component({
  selector: 'app-update-semestre',
  templateUrl: './update-semestre.component.html',
  styleUrls: ['./update-semestre.component.css']
})
export class UpdateSemestreComponent {

  semestre: Semestre = {
    id: 0,
    libelle: '',
    coursList: [],
  };
  messageAjout: string = '';

  constructor(
    private semestreService: SemestreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const semestreId = this.route.snapshot.params['id']; // Récupérer le paramètre 'id' de l'URL
    this.getSemestre(semestreId);
  }

  getSemestre(semestreId: number) {
    this.semestreService.getSemestre(semestreId).subscribe(
      semestre => {
        this.semestre = semestre;
      },
      error => {
        console.error('Erreur lors de la récupération du semestre', error);
      }
    );
  }

  modifierSemestre() {
    const semestreId = this.semestre.id;
    this.semestreService.updateSemestre(this.semestre).subscribe(
      updatedSemestre => {
        console.log('Semestre modifié avec succès', updatedSemestre);
        this.messageAjout = 'Semestre modifié avec succès.';
        
        // Ajoutez un délai avant la redirection (par exemple, 2 secondes)
        setTimeout(() => {
          this.router.navigate(['semestre']);
        }, 2000); // Délai de 2 secondes avant la redirection
      },
      error => {
        console.error('Erreur lors de la modification du semestre', error);
      }
    );
  }
  

}
