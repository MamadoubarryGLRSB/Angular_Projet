import { Component, OnInit } from '@angular/core';
import { ClasseService } from '../shared/service/classe.service';
import { Classe } from '../shared/models/classe';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-class',
  templateUrl: './update-class.component.html',
  styleUrls: ['./update-class.component.css']
})
export class UpdateClassComponent implements OnInit  {
  classe: Classe = {
    id: 0,
    libelle: '',
    niveau: '',
    filiere: ''
  };

  messageAjout: string = '';

  constructor(private classeService: ClasseService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const classeId = this.route.snapshot.params['id']; // Récupérer le paramètre 'id' de l'URL
    this.getClasse(classeId);
  }

  getClasse(classeId: number) {
    this.classeService.getClasse(classeId).subscribe(
      classe => {
        this.classe = classe;
      },
      error => {
        console.error('Erreur lors de la récupération de la classe', error);
      }
    );
  }

  modifierClasse() {
    const classeId = this.classe.id;
    this.classeService.updateClasse(this.classe).subscribe(
      updatedClasse => {
        console.log('Classe modifiée avec succès', updatedClasse);
        this.messageAjout = 'Classe modifiée avec succès.';
        
        // Ajoutez un délai avant la redirection (par exemple, 2 secondes)
        setTimeout(() => {
          this.router.navigate(['classe']);
        }, 2000); // Délai de 2 secondes avant la redirection
      },
      error => {
        console.error('Erreur lors de la modification de la classe', error);
      }
    );
  }
  
  
}

