import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AppRole, ProfesseurDTO } from "../models/professeur";

@Injectable({
    providedIn: 'root'
  })
  export class ProfesseurService {
    private baseUrl = 'http://localhost:8080/api/professeurs';
  
    constructor(private http: HttpClient) { }
  
    getAllProfesseurs(): Observable<ProfesseurDTO[]> {
      return this.http.get<ProfesseurDTO[]>(this.baseUrl);
    }
  
    ajouterProfesseur(professeur: ProfesseurDTO): Observable<ProfesseurDTO> {
      const url = `${this.baseUrl}/ajouter-professeur`;
      return this.http.post<ProfesseurDTO>(url, professeur);
    }

   
    enregistrerProfesseur(professeur: ProfesseurDTO): Observable<ProfesseurDTO> {
      return this.http.post<ProfesseurDTO>(`${this.baseUrl}/enregistrer-professeur`, professeur);
    }
  
    updateProfesseur(id: number, professeur: ProfesseurDTO): Observable<ProfesseurDTO> {
      return this.http.put<ProfesseurDTO>(`${this.baseUrl}/update-professeur/${id}`, professeur);
    }
  
    getProfesseur(id: number): Observable<ProfesseurDTO> {
      return this.http.get<ProfesseurDTO>(`${this.baseUrl}/professeur/${id}`);
    }

    getRoles(): Observable<AppRole[]> {
      const url = `${this.baseUrl}/roles`; // Endpoint pour récupérer les rôles, ajustez-le en fonction de votre API
      return this.http.get<AppRole[]>(url);
    }
  
    deleteProfesseur(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/delete-professeur/${id}`);
    }

    getProfesseurCours(professeurId: number, filter?: string): Observable<any> {
      let url = `${this.baseUrl}/professeur-cours?professeurId=${professeurId}`;
      if (filter) {
        url += `&filter=${filter}`;
      }
      return this.http.get<any>(url);
    }
    
  }