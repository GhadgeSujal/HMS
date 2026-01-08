import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {

    if (this.auth.isLoggedIn() && this.auth.isDoctor()) {
      return true;
    }

    // 🚫 Admin or not logged in
    this.router.navigate(['/login']);
    return false;
  }
}
