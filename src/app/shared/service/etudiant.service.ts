import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppRole, Etudiant } from "../models/etudiant";
import { Classe } from "../models/classe";

@Injectable({
    providedIn: 'root'
  })
  export class EtudiantService {
    private apiUrl = 'http://localhost:8080/api/etudiants'; // Remplacez par votre URL d'API
  
    constructor(private http: HttpClient) { }
  
    getAllEtudiants(): Observable<Etudiant[]> {
      return this.http.get<Etudiant[]>(`${this.apiUrl}`);
    }

    getRoles(): Observable<AppRole[]> {
        const url = `${this.apiUrl}/roles`; // Endpoint pour récupérer les rôles, ajustez-le en fonction de votre API
        return this.http.get<AppRole[]>(url);
      }
  

      deleteEtudiant(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/delete-etudiant/${id}`);
      }

    getClasses(): Observable<Classe[]> {
      return this.http.get<Classe[]>(`${this.apiUrl}/classes`);
    }
  
    addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
      return this.http.post<Etudiant>(`${this.apiUrl}/ajouter-etudiant`, etudiant);
    }

    getEtudiantsByClasse(classeId: number): Observable<Etudiant[]> {
        return this.http.get<Etudiant[]>(`${this.apiUrl}/classe/${classeId}`);
      }
  }