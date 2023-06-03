import { Component, OnInit } from '@angular/core';
import { Classe } from '../shared/models/classe';
import { ClasseService } from '../shared/service/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',

})

export class ClasseComponent implements OnInit{
 
  classes: Classe[] = [];
  nouvelleClasse: Classe = {
    id: 0,
    libelle: '',
    niveau: '',
    filiere: ''
  };

  constructor(private classeService: ClasseService) {}

  ngOnInit() {
    this.obtenirClasses();
  }

  obtenirClasses() {
    this.classeService.getClasses().subscribe(
      classes => {
        this.classes = classes;
      },
      error => {
        console.error('Erreur lors de la récupération des classes', error);
      }
    );
  }

  confirmerSuppression(classeId: number) {
    console.log('ID de la classe à supprimer :', classeId);
    if (confirm("Êtes-vous sûr de vouloir supprimer cette classe ?")) {
      this.classeService.supprimerClasse(classeId).subscribe(
        () => {
          console.log('Classe supprimée avec succès');
          this.obtenirClasses(); // Rafraîchir la liste des classes après suppression
        },
        error => {
          console.error('Erreur lors de la suppression de la classe', error);
        }
      );
    }
  }
}