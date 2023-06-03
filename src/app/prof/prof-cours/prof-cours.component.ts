import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProfesseurDTO } from 'src/app/shared/models/professeur';
import { SessionCours } from 'src/app/shared/models/sessionCours';
import { ProfesseurService } from 'src/app/shared/service/prof.service';
import { SessionCoursService } from 'src/app/shared/service/sessionCours.service';

@Component({
  selector: 'app-prof-cours',
  templateUrl: './prof-cours.component.html',
  styleUrls: ['./prof-cours.component.css']
})
export class ProfCoursComponent  implements OnInit  {
  professeurId: number = 0;
  professeur: ProfesseurDTO | undefined;
  sessionCours: SessionCours[] | undefined;
  filter: string = '';
  demandeEnregistree: boolean = false;
  messageDemande: string = '';

  constructor(
    private route: ActivatedRoute,
    private professeurService: ProfesseurService,
    private sessionCoursService: SessionCoursService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params => {
          this.professeurId = +params['id'];
          return this.professeurService.getProfesseur(this.professeurId);
        })
      )
      .subscribe(
        (professeur: ProfesseurDTO) => {
          this.professeur = professeur;
          this.loadSessionCours('jour');
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  loadSessionCours(filter: string): void {
    this.filter = filter;
    if (this.professeurId !== 0) {
      this.professeurService.getProfesseurCours(this.professeurId, filter).subscribe(
        (response: any) => {
          this.sessionCours = response.sessionCours;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  loadAllSessionCours(): void {
    this.loadSessionCours('all');
  }

  demanderAnnulation(sessionId: number): void {
    this.sessionCoursService.demanderAnnulationCours(sessionId).subscribe(
      () => {
        this.demandeEnregistree = true;
        this.messageDemande = 'Demande d\'annulation enregistrée avec succès.';
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}

