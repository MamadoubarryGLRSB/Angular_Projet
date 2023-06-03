import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cours } from 'src/app/shared/models/cours';
import { Module } from 'src/app/shared/models/module';
import { ProfesseurDTO } from 'src/app/shared/models/professeur';
import { Salle } from 'src/app/shared/models/salle';
import { SessionCours  } from 'src/app/shared/models/sessionCours';


import { SessionCoursService } from 'src/app/shared/service/sessionCours.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { Classe } from 'src/app/shared/models/classe';




@Component({
  selector: 'app-add-session-cours',
  templateUrl: './add-session-cours.component.html',
  styleUrls: ['./add-session-cours.component.css']
})
export class AddSessionCoursComponent implements OnInit  {
  sessionCoursForm!: FormGroup;
  salles!: Salle[];
  professeurs!: ProfesseurDTO[];
  modules!: Module[];
  cours!: Cours[];
  classes!: Classe[]
  messageAjout: string = '';


  constructor(
    private formBuilder: FormBuilder,
    private sessionCoursService: SessionCoursService,
    private router: Router,
    private datePipe: DatePipe
    
  ) { }

  ngOnInit(): void {
    // Initialiser le formulaire
    this.sessionCoursForm = this.formBuilder.group({
      date: [''],
      heureDebut: [null], // Champ de type number
      nbreHeures: [''],
      salleId: [''],
      moduleId: [''],
      professeurId: [''],
      coursId: [''],
      classeId: ['']
    });
    

    // Charger les données nécessaires
    this.loadSalles();
    this.loadProfesseurs();
    this.loadModules();
    this.loadCours();
    this.loadClasses();
  }

  // Charger la liste des salles depuis le service
  loadSalles(): void {
    this.sessionCoursService.getSalles().subscribe((salles) => {
      this.salles = salles;
    });
  }
  loadClasses():void{
    this.sessionCoursService.getClasses().subscribe((classes) => {
      this.classes = classes;
    });
  }

  // Charger la liste des professeurs depuis le service
  loadProfesseurs(): void {
    this.sessionCoursService.getProfesseurs().subscribe((professeurs) => {
      this.professeurs = professeurs;
    });
  }

  // Charger la liste des modules depuis le service
  loadModules(): void {
    this.sessionCoursService.getModules().subscribe((modules) => {
      this.modules = modules;
    });
  }

  // Charger la liste des cours depuis le service
  loadCours(): void {
    this.sessionCoursService.getCours().subscribe((cours) => {
      this.cours = cours;
    });
  }

  // Enregistrer une session de cours
  onSubmit(): void {
    const rawDateValue: string | null = this.sessionCoursForm.value.date;

    let dateValue: Date | null = null;
    if (rawDateValue) {
      dateValue = moment(rawDateValue, 'YYYY-MM-DD').toDate();
    const sessionCoursData: SessionCours = {
      // ... Vos propriétés de sessionCours
      
        id: null,
        date: dateValue,// Formater la date au format YYYY-MM-DD
        heureDebut: this.sessionCoursForm.value.heureDebut,
        nbreHeures: this.sessionCoursForm.value.nbreHeures, // Ajoutez cette ligne pour récupérer le nombre d'heures
        etat: '',
        etat_session: '',
        demandeAnnulation: false,
        coursId: this.sessionCoursForm.value.coursId,
        salleId: this.sessionCoursForm.value.salleId,
        moduleId: this.sessionCoursForm.value.moduleId,
        professeurId: this.sessionCoursForm.value.professeurId,
        classesId: this.sessionCoursForm.value.classeId
    };
  
    this.sessionCoursService.enregistrerSessionCours(sessionCoursData).subscribe(
      () => {
        this.messageAjout = 'Session de cours ajoutée avec succès.';
        this.sessionCoursForm.reset(); // Réinitialisez le formulaire
  
        setTimeout(() => {
          this.router.navigate(['/sessionCours']);
          this.messageAjout = 'Sessions Cous  ajouté avec succès'; // Réinitialisez le message de succès
        }, 3000); // Délai de 2 secondes avant de supprimer le message de succès
      },
      (error) => {
        // Gérer les erreurs lors de l'enregistrement de la session de cours
      }
    );
  }
  

  
  }
}
  


