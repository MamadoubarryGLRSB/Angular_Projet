import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classe } from '../models/classe';

import { throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private apiUrl = 'http://localhost:8080/api/classes';

  constructor(private http: HttpClient) { }

  
  ajouterClasse(classe: Classe): Observable<Classe> {
    return this.http.post<Classe>(`${this.apiUrl}/ajouter-classe`, classe);
  }

  enregistrerClasse(classe: Classe): Observable<Classe> {
    return this.http.post<Classe>(`${this.apiUrl}/enregistrer-classe`, classe);
  }

  updateClasse(classe: Classe): Observable<Classe> {
    return this.http.put<Classe>(`${this.apiUrl}/update-classe/${classe.id}`, classe);
  }

  getClasse(classeId: number): Observable<Classe> {
    return this.http.get<Classe>(`${this.apiUrl}/${classeId}`);
  }
  
  getClasses(): Observable<Classe[]> {
    return this.http.get<Classe[]>(`${this.apiUrl}`);
  }

  supprimerClasse(classeId: number | undefined): Observable<void> {
    if (classeId && classeId !== 0) {
      return this.http.delete<void>(`${this.apiUrl}/delete-classe/${classeId}`);
    }
    return throwError('ID de classe invalide.'); // Gérer le cas où classeId est undefined ou égal à zéro
  }
  
  

 
}
