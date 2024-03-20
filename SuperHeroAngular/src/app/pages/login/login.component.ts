import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isSuccess = false;
  showError = false;

  email: string = '';
  password: string = '';

  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    console.log("Sending HTTP request to login");
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      (response: any) => {
        this.showError = false;
        this.isSuccess = true;
        console.log('Login successful:', response);
        setTimeout(() => {
          this.router.navigateByUrl('/home');
        }, 3000);
      },
      (error) => {
        this.showError = true;
        this.errorMessage = error.error;
        console.error(error);
        console.log(this.errorMessage);
      }
    )
  }
}
