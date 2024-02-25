import { Component } from '@angular/core';
import { SuperHero } from '../../models/SuperHero';
import { SuperHeroService } from '../../super-hero.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrl: './create-hero.component.css'
})
export class CreateHeroComponent {

  superHero: SuperHero = new SuperHero();

  isSuccessful = false;
  errorMessage = '';

  constructor(public superheroService: SuperHeroService) { }

  onSubmit(): void {
    this.superheroService.createSuperHero(this.superHero).subscribe(
      (response: any) => {
        console.log(response);
        this.isSuccessful = true;
      },
      (error: any) => {
        if (error.error && error.error.errorMessage) {
          this.errorMessage = error.error.errorMessage + " for field " + error.error.invalidField;
        } else {
          this.errorMessage = "A apărut o eroare necunoscută.";
        }
        console.error(this.errorMessage);
      }
    );


  }


}
