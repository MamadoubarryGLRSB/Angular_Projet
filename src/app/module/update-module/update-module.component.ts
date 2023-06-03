import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/shared/models/module';
import { ModuleService } from 'src/app/shared/service/module.service';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {
  module: Module = {
    id: 0,
    libelle: '',
    // Autres propriétés du module
  };
  messageModification: string = '';

  constructor(
    private moduleService: ModuleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const moduleId = this.route.snapshot.params['id']; // Récupérer le paramètre 'id' de l'URL
    this.getModule(moduleId);
  }

  getModule(moduleId: number) {
    this.moduleService.getModule(moduleId).subscribe(
      module => {
        this.module = module;
      },
      error => {
        console.error('Erreur lors de la récupération du module', error);
      }
    );
  }

  modifierModule() {
    const semestreId = this.module.id;
    this.moduleService.updateModule(this.module).subscribe(
      updatedSemestre => {
        console.log('Semestre modifié avec succès', updatedSemestre);
        this.messageModification = 'Semestre modifié avec succès.';
        
        // Ajoutez un délai avant la redirection (par exemple, 2 secondes)
        setTimeout(() => {
          this.router.navigate(['module']);
        }, 2000); // Délai de 2 secondes avant la redirection
      },
      error => {
        console.error('Erreur lors de la modification du module', error);
      }
    );
}
}
