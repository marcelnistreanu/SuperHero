import { Component } from '@angular/core';
import { SuperHero } from '../../models/SuperHero';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrl: './create-hero.component.css'
})
export class CreateHeroComponent {

  superHero: SuperHero = new SuperHero(1, "", "", "", "");

  isSuccessful = false;
  errorMessage = '';
  submitted = false;

  constructor(public superheroService: SuperHeroService) { }

  onSubmit(): void {
    this.submitted = true;
    this.superheroService.createSuperHero(this.superHero).subscribe(
      (response: any) => {
        console.log(response);
        this.isSuccessful = true;
      },
      (error: any) => {
        if (error.error && error.error.errorMessage) {
          this.errorMessage = error.error.errorMessage + " for field " + error.error.invalidField;
        } else {
          this.errorMessage = "Unknown error";
        }
        console.error(this.errorMessage);
      }
    );


  }


}
