import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRole } from 'src/app/shared/models/etudiant';
import { EtudiantService } from 'src/app/shared/service/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit{
  etudiantForm!: FormGroup;
  roles: AppRole[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private etudiantService: EtudiantService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getRoles();
  }

  initForm(): void {
    this.etudiantForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      matricule: ['', Validators.required],
      nomComplet: ['', Validators.required],
      roles: [[]],
    });
  }

  onSubmit(): void {
    if (this.etudiantForm.invalid) {
      return;
    }

    const etudiant = this.etudiantForm.value;

    this.etudiantService.addEtudiant(etudiant).subscribe(
      (response) => {
        console.log('Étudiant ajouté avec succès', response);
        this.etudiantForm.reset();
        this.router.navigate(['/etudiant']);
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de l\'ajout de l\'étudiant', error);
      }
    );
  }

  getRoles(): void {
    this.etudiantService.getRoles().subscribe(
      (roles) => {
        this.roles = roles;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des rôles', error);
      }
    );
  }

}
