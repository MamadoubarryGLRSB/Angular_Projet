import { Injectable } from "@angular/core";
import { AnneeScolaire } from "../models/annee";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class AnneeScolaireService {
    private apiUrl ='http://localhost:8080/api/anneeScolaires'
    
  
    constructor(private http: HttpClient) { }
  
    getAllAnneeScolaires(): Observable<AnneeScolaire[]> {
      return this.http.get<AnneeScolaire[]>(this.apiUrl);
    }
  
    ajouterAnneeScolaire(anneeScolaire: AnneeScolaire): Observable<AnneeScolaire> {
      return this.http.post<AnneeScolaire>(`${this.apiUrl}/ajouter-annee-scolaire`, anneeScolaire);
    }
  
    enregistrerAnneeScolaire(anneeScolaire: AnneeScolaire): Observable<AnneeScolaire> {
      return this.http.post<AnneeScolaire>(`${this.apiUrl}/enregistrer-annee-scolaire`, anneeScolaire);
    }
}