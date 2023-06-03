import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnneeScolaire } from 'src/app/shared/models/annee';
import { Classe } from 'src/app/shared/models/classe';
import { PlanificationClasse } from 'src/app/shared/models/planif';
import { PlanificationService } from 'src/app/shared/service/planif.service';

@Component({
  selector: 'app-plannif-add',
  templateUrl: './plannif-add.component.html',
  styleUrls: ['./plannif-add.component.css']
})
export class PlannifAddComponent  implements OnInit {
  planification: PlanificationClasse = {
    libelle: '',
    niveau: '',
    classeId: 0,
    anneeScolaireId: 0
  };
  classes: Classe[] = [];
  anneeScolaires: AnneeScolaire[] = [];

  constructor(private planificationService: PlanificationService,private router:Router) { }

  ngOnInit(): void {
    this.loadClasses();
    this.loadAnneeScolaires();
  }

  loadClasses(): void {
    this.planificationService.getClasses().subscribe((classes) => {
      this.classes = classes;
    });
  }

  loadAnneeScolaires(): void {
    this.planificationService.getAnneeScolaires().subscribe((anneeScolaires) => {
      this.anneeScolaires = anneeScolaires;
    });
  }

  addPlanification(): void {
    this.planificationService.ajouterPlanificationClasse(this.planification).subscribe((planification) => {
      console.log('Planification added:', planification);
      this.router.navigate(['/plannif-classe']);
      // Reset the form or perform any other actions
    });
  }

}
