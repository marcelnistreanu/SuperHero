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

  //getSuperHeroes(): Observable<SuperHero[]> {
  //  return this.http.get<SuperHero[]>(this.apiUrl);
  //}

  async getSuperHeroes(): Promise<SuperHero[]> {
    console.log("*** getting superheroes");
    try {
      const response = await this.http.get<any>(this.apiUrl).toPromise();
      if (response && response.isSuccess && response.value) {
        console.log("*** 0", response);
        return response.value as SuperHero[];
      } else {
        console.log("*** 1", response);
        return [];
      }
    } catch (error) {
      throw 'Error fetching superheroes: ' + error;
    }
  }

  createSuperHero(hero: SuperHero): Observable<any> {
    return this.http.post<SuperHero>(this.apiUrl, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
