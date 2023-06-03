import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Module } from "../models/module";

@Injectable({
    providedIn: 'root'
  })
  export class ModuleService {
    private baseUrl = 'http://localhost:8080/api/modules';
  
    constructor(private http: HttpClient) { }
  
    getAllModules(): Observable<Module[]> {
      return this.http.get<Module[]>(`${this.baseUrl}`);
    }
  
    ajoutModule(module: Module): Observable<Module> {
      return this.http.post<Module>(`${this.baseUrl}/ajouter-module`, module);
    }
  
    enregistrerModule(module: Module): Observable<Module> {
      return this.http.post<Module>(`${this.baseUrl}/enregistrer-module`, module);
    }
  
    updateModule(module: Module): Observable<Module> {
        const url = `${this.baseUrl}/update-module/${module.id}`;
        return this.http.put<Module>(url, module);
      }
  
    getModule(id: number): Observable<Module> {
      return this.http.get<Module>(`${this.baseUrl}/module/${id}`);
    }
  
    deleteModule(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/delete-module/${id}`);
    }
  }