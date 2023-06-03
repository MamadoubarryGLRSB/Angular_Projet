import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cours } from "../models/cours";

@Injectable({
    providedIn: 'root'
  })
  export class CoursService {
    private apiUrl = 'http://localhost:8080/api/cours';
  
    constructor(private http: HttpClient) {}
  
    getAllCours(): Observable<Cours[]> {
      return this.http.get<Cours[]>(this.apiUrl);
    }
  
    ajouterCours(cours: Cours): Observable<Cours> {
      return this.http.post<Cours>(`${this.apiUrl}/ajouter-cours`, cours);
    }
  
    enregistrerCours(cours: Cours): Observable<Cours> {
      return this.http.post<Cours>(`${this.apiUrl}/enregistrer-cours`, cours);
    }
  
    changerEtatSessionCours(id: number, nouvelEtat: string): Observable<string> {
      return this.http.put<string>(`${this.apiUrl}/cours/${id}/etat`, nouvelEtat);
    }
    
    session(id: number, nouvelEtat: string): Observable<string> {
      return this.http.put<string>(`${this.apiUrl}/cours/${id}/terminer`, nouvelEtat);
    }

  }