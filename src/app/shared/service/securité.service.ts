import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

    export class SecurityService {
        private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
        private baseUrl = 'http://localhost:8080/api/security';
      
        constructor(private http: HttpClient) {}
      
        connexion(username: string, password: string): Observable<User> {
          return this.http.post<User>(`${this.baseUrl}/login`, { username, password });
        }
      
        isUserLoggedIn(): Observable<boolean> {
          return this.loggedIn.asObservable();
        }
      
        setLoggedIn(value: boolean): void {
          this.loggedIn.next(value);
        }
      }
  