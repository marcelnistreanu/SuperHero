import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:7126/api/User';

  constructor(private http: HttpClient) { }

  login(userRequest: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, userRequest);
  }
}
