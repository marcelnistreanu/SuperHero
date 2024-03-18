import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../../models/SuperHero';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  superheroes: SuperHero[] = [];
  hero: SuperHero;
    //= new SuperHero(10, "Super", "Vas", "AS", "asd");

  constructor(private superHeroesService: SuperHeroService) { }

  ngOnInit(): void {
    this.getSuperHeroes();
  }

  getSuperHeroes(): void {
    console.log("Sending HTTP request to get superheroes");
    this.superHeroesService.getSuperHeroes().subscribe((response: any) => {
      if (response && response.value) {
        this.superheroes = response.value;
        //this.hero = this.superheroes[0];
        console.log("Lista:", this.superheroes);
        console.log(this.hero);
      } else {
        console.error("Invalid response format:", response);
      }
    });
  }

  getHeroesNew(): void {
    console.log("Sending HTTP request to get superheroes");
    this.superHeroesService.getHeroesNew().subscribe(
      (data: SuperHero[]) => {
        this.superheroes = data;
        console.log(this.superheroes);
      },
      (error) => {
        console.error('Error fetching superheroes:', error);
      }
    );
  }


  deleteHero(heroId: number): void {
    console.log("Sending HTTP request to delete superhero");
    this.superHeroesService.deleteHero(heroId).subscribe((response: any) => {
      if (response) {
        console.log("Hero deleted");
      } else {
        console.error("Invalid response format:", response);
      }
    })
  }

  selectHero(heroName: string): void {
    console.log(heroName);
  }

}
