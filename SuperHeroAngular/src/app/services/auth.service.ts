import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:7126/api/Auth';

  constructor(private http: HttpClient) { }

  login(loginRequest: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginRequest);
  }

  signUp(signUpRequest: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signUp`, signUpRequest);
  }
}
