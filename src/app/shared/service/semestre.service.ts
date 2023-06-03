import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Semestre } from "../models/semestre";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class SemestreService {
    private apiUrl = 'http://localhost:8080/api/semestres';
  
    constructor(private http: HttpClient) { }
  
    ajouterSemestre(semestre: Semestre): Observable<Semestre> {
      return this.http.post<Semestre>(`${this.apiUrl}/ajouter-semestre`, semestre);
    }
  
    enregistrerSemestre(semestre: Semestre): Observable<Semestre> {
      return this.http.post<Semestre>(`${this.apiUrl}/enregistrer-semestre`, semestre);
    }
  
    updateSemestre(semestre: Semestre): Observable<Semestre> {
      return this.http.put<Semestre>(`${this.apiUrl}/update-semestre/${semestre.id}`, semestre);
    }
  
    getSemestre(semestreId: number): Observable<Semestre> {
      return this.http.get<Semestre>(`${this.apiUrl}/${semestreId}`);
    }
  
    getSemestres(): Observable<Semestre[]> {
      return this.http.get<Semestre[]>(`${this.apiUrl}`);
    }
  
    supprimerSemestre(semestreId: number | undefined): Observable<void> {
      if (semestreId && semestreId !== 0) {
        return this.http.delete<void>(`${this.apiUrl}/delete-semestre/${semestreId}`);
      }
      return throwError('ID de semestre invalide.'); // Gérer le cas où semestreId est undefined ou égal à zéro
    }
  }
  