import { Component } from '@angular/core';
import { PlanificationClasse } from '../shared/models/planif';
import { PlanificationService } from '../shared/service/planif.service';
import { Classe } from '../shared/models/classe';
import { AnneeScolaire } from '../shared/models/annee';

@Component({
  selector: 'app-plannif-classe',
  templateUrl: './plannif-classe.component.html',
  styleUrls: ['./plannif-classe.component.css']
})
export class PlannifClasseComponent {
  planifications: PlanificationClasse[] = [];
  anneeScolaires: AnneeScolaire[] = [];
  classes: Classe[] = [];

  constructor(private planificationService: PlanificationService) {}

  ngOnInit(): void {
    this.loadPlanifications();
    this.loadAnneeScolaires();
    this.loadClasses();
  }

  loadPlanifications(): void {
    this.planificationService.getAllPlanifications().subscribe((planifications) => {
      this.planifications = planifications;
    });
  }

  loadAnneeScolaires(): void {
    this.planificationService.getAnneeScolaires().subscribe((anneeScolaires) => {
      this.anneeScolaires = anneeScolaires;
    });
  }

  loadClasses(): void {
    this.planificationService.getClasses().subscribe((classes) => {
      this.classes = classes;
    });
  }

  getClasse(classeId: number): Classe | undefined {
    return this.classes.find((classe) => classe.id === classeId);
  }

  getAnneeScolaire(anneeScolaireId: number): AnneeScolaire | undefined {
    return this.anneeScolaires.find((annee) => annee.id === anneeScolaireId);
  }
}
