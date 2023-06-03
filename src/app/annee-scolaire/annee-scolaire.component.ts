import { Component } from '@angular/core';
import { SemestreService } from '../shared/service/semestre.service';
import { AnneeScolaireService } from '../shared/service/anneeScolaire.service';
import { AnneeScolaire } from '../shared/models/annee';

@Component({
  selector: 'app-annee-scolaire',
  templateUrl: './annee-scolaire.component.html',
  styleUrls: ['./annee-scolaire.component.css']
})
export class AnneeScolaireComponent {
  annees:AnneeScolaire[]=[];
  constructor(private anneService: AnneeScolaireService) { }
  ngOnInit(): void {
    this.getSemestres();
  }

  getSemestres(): void {
    this.anneService.getAllAnneeScolaires().subscribe(semestres => this.annees = semestres);
      
  }

}
