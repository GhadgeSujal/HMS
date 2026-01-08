import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        // VERY IMPORTANT
        this.authService.saveUser(res);

        // Redirect by role
        if (res.role === 'ADMIN') {
          sessionStorage.setItem('role', 'ADMIN');
          this.router.navigate(['/admin']);
        } else if (res.role === 'DOCTOR') {
          sessionStorage.setItem('role', 'DOCTOR');
          this.router.navigate(['/docdash']);
        }
      },
      error: () => {
        this.errorMessage = 'Invalid username or password';
      },
    });
  }
}
