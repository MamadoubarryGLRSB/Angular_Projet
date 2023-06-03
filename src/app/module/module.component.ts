import { Component, OnInit } from '@angular/core';
import { Module } from '../shared/models/module';
import { ModuleService } from '../shared/service/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit  {

  modules: Module[] = [];
  erreurSuppression: string | null = null;
  constructor(private moduleService: ModuleService) { }

  ngOnInit(): void {
    this.getModules();
  }

  getModules(): void {
    this.moduleService.getAllModules()
      .subscribe(modules => this.modules = modules);
  }

  confirmerSuppression(moduleId: number) {
    console.log('ID du module à supprimer :', moduleId);
    if (confirm("Êtes-vous sûr de vouloir supprimer ce module ?")) {
      this.moduleService.deleteModule(moduleId).subscribe(
        () => {
          console.log('Module supprimé avec succès');
          this.getModules(); // Rafraîchir la liste des modules après suppression
        },
        (error) => {
          console.error('Erreur lors de la suppression du module', error);
          this.erreurSuppression = 'Impossible de supprimer le module en raison de dépendances.';
        }
      );
    }
  }

}
