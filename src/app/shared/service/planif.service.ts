import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlanificationClasse } from "../models/planif";
import { Observable } from "rxjs";
import { AnneeScolaire } from "../models/annee";
import { Classe } from "../models/classe";

@Injectable({
    providedIn: 'root'
  })
  export class PlanificationService {
    private apiUrl = 'http://localhost:8080/api/planifications'; // Remplacez l'URL par l'URL de votre API
  
    constructor(private http: HttpClient) { }
  
    ajouterPlanificationClasse(planification: PlanificationClasse): Observable<PlanificationClasse> {
      return this.http.post<PlanificationClasse>(`${this.apiUrl}/ajouter-planification-classe`, planification);
    }
  
    enregistrerPlanificationClasse(planification: PlanificationClasse): Observable<PlanificationClasse> {
      return this.http.post<PlanificationClasse>(`${this.apiUrl}/enregistrer-planification-classe`, planification);
    }
  
    getClasses(): Observable<Classe[]> {
      return this.http.get<Classe[]>(`${this.apiUrl}/classes`);
    }
  
    getAnneeScolaires(): Observable<AnneeScolaire[]> {
      return this.http.get<AnneeScolaire[]>(`${this.apiUrl}/anneeScolaires`);
    }
  
    getAllPlanifications(): Observable<PlanificationClasse[]> {
      return this.http.get<PlanificationClasse[]>(this.apiUrl);
    }
  }