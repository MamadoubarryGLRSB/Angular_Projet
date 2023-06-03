import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { UpdateClassComponent } from './update-class/update-class.component';

const routes: Routes = [

  { 
     path: 'cours', 
     loadChildren: () => import('./cours/cours.module').then(m => m.CoursModule) },

 

  

  { path: 'register', loadChildren: () => import('./shared/register/register.module').then(m => m.RegisterModule) },

  { path: 'classe', 
    loadChildren: () => import('./classe/classe.module').then(m => m.ClasseModule) },

  { path: 'add-classe', loadChildren: () => import('./add-classe/add-classe.module').then(m => m.AddClasseModule) },

  {  path: 'update-class/:id',
  loadChildren: () => import('./update-class/update-class.module').then(m => m.UpdateClassModule)},

  { path: 'semestre', loadChildren: () => import('./semestre/semestre.module').then(m => m.SemestreModule) },

  { path: 'add-semestre', loadChildren: () => import('./semestre/add-semestre/add-semestre.module').then(m => m.AddSemestreModule) },

  { path: 'update-semestre/:id', loadChildren: () => import('./semestre/update-semestre/update-semestre.module').then(m => m.UpdateSemestreModule) },

  { path: 'sessionCours', loadChildren: () => import('./session-cours/session-cours.module').then(m => m.SessionCoursModule) },

  { path: 'add-sessionCours', loadChildren: () => import('./session-cours/add-session-cours/add-session-cours.module').then(m => m.AddSessionCoursModule) },

  { path: 'prof', loadChildren: () => import('./prof/prof.module').then(m => m.ProfModule) },

  { path: 'add-prof', loadChildren: () => import('./prof/add-proff/add-proff.module').then(m => m.AddProffModule) },

  
  { path: 'anneeScolaire', loadChildren: () => import('./annee-scolaire/annee-scolaire.module').then(m => m.AnneeScolaireModule) },

  { path: 'add-anneeScolaire', loadChildren: () => import('./annee-scolaire/add-annee-scolaire/add-annee-scolaire.module').then(m => m.AddAnneeScolaireModule) },

  { path: 'aadd-cours', loadChildren: () => import('./cours/add-cours/add-cours.module').then(m => m.AddCoursModule) },

  { path: 'plannif-classe', loadChildren: () => import('./plannif-classe/plannif-classe.module').then(m => m.PlannifClasseModule) },

  { path: 'plannif-add', loadChildren: () => import('./plannif-classe/plannif-add/plannif-add.module').then(m => m.PlannifAddModule) },

  { path: 'prof-cours/:id', loadChildren: () => import('./prof/prof-cours/prof-cours.module').then(m => m.ProfCoursModule) },

  { path: 'module', loadChildren: () => import('./module/module.module').then(m => m.ModuleModule) },

  { path: 'update-module/:id', loadChildren: () => import('./module/update-module/update-module.module').then(m => m.UpdateModuleModule) },

  { path: 'salles', loadChildren: () => import('./salles/salles.module').then(m => m.SallesModule) },

  { path: 'add-salles', loadChildren: () => import('./salles/add-salles/add-salles.module').then(m => m.AddSallesModule) },

  { path: 'add-modules', loadChildren: () => import('./module/add-modules/add-modules.module').then(m => m.AddModulesModule) },

  { path: 'etudiant', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },

  { path: 'add-etudiant', loadChildren: () => import('./etudiant/add-etudiant/add-etudiant.module').then(m => m.AddEtudiantModule) },
  { path: 'aadd-cours', loadChildren: () => import('./cours/add-cours/add-cours.module').then(m => m.AddCoursModule) },
  
 

 


  

  


 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
