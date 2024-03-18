import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isSuccess = true;
  showError = false;

  username: string = '';
  password: string = '';

  errorMessage = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    console.log("Sending HTTP request to login");
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      (response: any) => {
        this.showError = false;
        console.log('Login successful:', response);
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
