import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SuperHero } from '../models/SuperHero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  apiUrl = 'https://localhost:7126/api/Superhero';

  constructor(private http: HttpClient) { }

  getSuperHeroes(): Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(this.apiUrl);
  }
}
