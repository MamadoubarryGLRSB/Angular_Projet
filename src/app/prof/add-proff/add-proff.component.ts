import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRole, ProfesseurDTO } from 'src/app/shared/models/professeur';


import { ProfesseurService } from 'src/app/shared/service/prof.service';

@Component({
  selector: 'app-add-proff',
  templateUrl: './add-proff.component.html',
  styleUrls: ['./add-proff.component.css']
})
export class AddProffComponent {
  professeurForm!: FormGroup;
  roles: AppRole[] = [];



  constructor(
    private formBuilder: FormBuilder,
    private professeurService: ProfesseurService,
    private router:Router
  ) {
    this.initForm();
    this.getRoles();
  }

  initForm(): void {
    this.professeurForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      specialites: ['', Validators.required],
      grades: ['', Validators.required],
      nomComplet: ['', Validators.required],
      roles: [[]], // Utilisez 'roles' au lieu de 'selectedRoles'
    });
  }
  
  

  onSubmit(): void {
    if (this.professeurForm.invalid) {
      return;
    }
  
    const professeur = this.professeurForm.value;

    this.professeurService.ajouterProfesseur(professeur)
      .subscribe(
        (response) => {
          console.log('Professeur ajouté avec succès', response);
          this.professeurForm.reset();
          this.router.navigate(['/prof']);
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'ajout du professeur', error);
        }
      );
  }

  getRoles(): void {
    this.professeurService.getRoles().subscribe(
      (roles) => {
        this.roles = roles;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des rôles', error);
      }
    );
  }
  
}
