import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../../models/SuperHero';
import { SuperHeroService } from '../../super-hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  superheroes: SuperHero[];
  hero: SuperHero = new SuperHero();

  constructor(private superHeroesService: SuperHeroService) { }

  ngOnInit(): void {
    this.getSuperHeroes();
  }

  getSuperHeroes(): void {
    console.log("Sending HTTP request to get superheroes");
    this.superHeroesService.getSuperHeroes().subscribe((response: any) => {
      if (response && response.value) {
        this.superheroes = response.value;
        this.hero = this.superheroes[0];
        console.log("Lista:", this.superheroes);
        console.log(this.hero);
      } else {
        console.error("Invalid response format:", response);
      }
    });
  }

}
