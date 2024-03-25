import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SuperHero } from '../../models/SuperHero';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {

  superheroes: SuperHero[] = [];
  editHero: SuperHero = new SuperHero(10, "Super", "Vas", "AS", "asd");

  constructor(private superHeroesService: SuperHeroService) { }

  async ngOnInit(): Promise<void> {
    await this.getSuperHeroes();
  }

  async getSuperHeroes(): Promise<void> {
    console.log("Sending HTTP request to get superheroes");
    try {

      let response = await this.superHeroesService.getSuperHeroes();
      console.log("Response:", response);

      response.forEach(element => {
        console.log("*** item ***", element);
      });
      this.superheroes = await this.superHeroesService.getSuperHeroes();
      console.log("Lista:", this.superheroes);

      //

    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
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

  showHero(hero: SuperHero): string {
    return `Name: ${hero.name}, Place: ${hero.Place}`;
  }


  public resetHeroesToRandom(): void {
    this.superheroes = [];
    for (let i = 0; i < 10; i++) {
      this.superheroes.push(new SuperHero(i, "Super" + i, "Vas" + i, "AS" + i, "asd" + i));
    }
  }

  public rereadHeroes(): void {
    this.getSuperHeroes();
  }

}
