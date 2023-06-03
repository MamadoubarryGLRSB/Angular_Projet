import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, tap, throwError } from "rxjs";
import { Module } from "../models/module";
import { Cours } from "../models/cours";

import { Salle } from "../models/salle";
import { SessionCours  } from "../models/sessionCours";
import { Classe } from "../models/classe";
import { ProfesseurDTO } from "../models/professeur";





@Injectable({
    providedIn: 'root'
  })
  export class SessionCoursService {
    private apiUrl = 'http://localhost:8080/api/sessions-cours';
  
    constructor(private http: HttpClient) {}

  // Récupère toutes les sessions de cours
  getSessionsCours(): Observable<SessionCours[]> {
    return this.http.get<SessionCours[]>(this.apiUrl);
  }

  // Récupère les modules
  getModules(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/modules`);
  }

  // Récupère les cours
  getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(`${this.apiUrl}/cours`);
  }

  // Récupère les professeurs
  getProfesseurs(): Observable<ProfesseurDTO[]> {
    return this.http.get<ProfesseurDTO[]>(`${this.apiUrl}/professeurs`);
  }

  getClasses(): Observable<Classe[]> {
    return this.http.get<Classe[]>(`${this.apiUrl}/classes`);
  }

  // Récupère les salles
  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${this.apiUrl}/salles`);
  }

  // Ajoute une session de cours
  ajouterSessionCours(sessionCours: SessionCours): Observable<SessionCours> {
    return this.http.post<SessionCours>(`${this.apiUrl}/ajouter-session-cours`, sessionCours);
  }

  // Enregistre une session de cours
  enregistrerSessionCours(sessionCours: SessionCours): Observable<SessionCours> {
    return this.http.post<SessionCours>(`${this.apiUrl}/enregistrer-session-cours`, sessionCours);
  }

  // Modifie l'état d'une session de cours
  changerEtatSessionCours(id: number, nouvelEtat: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/sessions-cours/${id}/etat`, nouvelEtat);
  }

  session(id: number, nouvelEtat: string): Observable<string> {
    return this.http.put<string>(`${this.apiUrl}/sessions-cours/${id}/session`, nouvelEtat);
  }
    
  // Met à jour une session de cours
  updateSessionCours(id: number, sessionCours: SessionCours): Observable<SessionCours> {
    return this.http.put<SessionCours>(`${this.apiUrl}/update-session-cours/${id}`, sessionCours);
  }

  // Supprime une session de cours
  deleteSessionCours(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-session-cours/${id}`);
  }

  demanderAnnulationCours(id: number): Observable<string> {
    const url = `${this.apiUrl}/${id}/demande-annulation`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<string>(url, null, { headers });
  }

  // Récupère une session de cours par son ID
  getSessionCours(id: number): Observable<SessionCours> {
    return this.http.get<SessionCours>(`${this.apiUrl}/${id}`);
  }
      
  }