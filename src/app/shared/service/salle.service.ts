import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Salle } from "../models/salle";

@Injectable({
    providedIn: 'root'
  })
  export class SalleService {
    private apiUrl = 'http://localhost:8080/api/salles';
  
    constructor(private http: HttpClient) {}
  
    getSalles(): Observable<Salle[]> {
      return this.http.get<Salle[]>(this.apiUrl);
    }
  
    getSalleById(id: number): Observable<Salle> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Salle>(url);
    }
  
    ajouterSalle(salle: Salle): Observable<Salle> {
      const url = `${this.apiUrl}/ajouter-salle`;
      return this.http.post<Salle>(url, salle);
    }
  
    updateSalle(salleId: number, salle: Salle): Observable<Salle> {
        const url = `${this.apiUrl}update-salle/${salleId}`;
        return this.http.put<Salle>(url, salle);
    }
      
  
    supprimerSalle(id: number): Observable<void> {
      const url = `${this.apiUrl}/delete-salle/${id}`;
      return this.http.delete<void>(url);
    }
  }