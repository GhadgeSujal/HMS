import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminauthguardService {
  constructor(
    private AdminauthService: AdminauthService,
    private router: Router
  ) {}
  canActivate() {
    if (this.AdminauthService.isUserLogedIn()) {
      return true;
    } else {
      this.router.navigate(['ad-login']);
      return false;
    }
  }
}
