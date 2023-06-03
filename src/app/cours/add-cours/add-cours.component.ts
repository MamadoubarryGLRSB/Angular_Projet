import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cours } from 'src/app/shared/models/cours';
import { Semestre } from 'src/app/shared/models/semestre';
import { CoursService } from 'src/app/shared/service/cours.service';
import { SemestreService } from 'src/app/shared/service/semestre.service';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent {
  cours: Cours = {
    id: 0,
    nbreHeures: 0,
    raisonAnnulation: '',
    etat: '',
    nom: '',
    annule: false,
    semestreId: 0
  };
  semestres: Semestre[] = [];

  constructor(
    private coursService: CoursService,
    private semestreService: SemestreService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getSemestres();
  }

  getSemestres(): void {
    this.semestreService.getSemestres().subscribe(semestres => this.semestres = semestres);
  }

  ajouterCours(): void {
    this.coursService.ajouterCours(this.cours).subscribe(
      () => {
        console.log('Cours ajouté avec succès');
        // Redirection vers la liste des cours après l'ajout
        // Utilisez la logique de redirection appropriée dans votre application
        this.router.navigate(['/cours']);
      },
      error => {
        console.error('Erreur lors de l\'ajout du cours', error);
      }
    );
  }


  


}
