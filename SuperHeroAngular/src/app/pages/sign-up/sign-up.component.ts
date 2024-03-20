import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  isSuccessful = false;
  user: { email: string; password: string };
  isRegexPattern: string;
  isSignUpFailed = true;
  errorMessage = '';

  constructor(private authService: AuthService) {
    this.user = { email: '', password: '' };
  }

  onSubmit(): void {
    this.authService.signUp(this.user).subscribe(
      (response: any) => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log(response);
      },
      (error) => {
        this.isSuccessful = false;
        this.isSignUpFailed = true;
        this.errorMessage = error.error;
        console.error(error);
      }
    )
  }
}
