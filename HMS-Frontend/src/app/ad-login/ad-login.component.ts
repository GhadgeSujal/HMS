import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-ad-login',
  templateUrl: './ad-login.component.html',
  styleUrls: ['./ad-login.component.css'],
})
export class AdLoginComponent {
  username: string = '';
  password: string = '';

  inValidLogin = false;

  constructor(
    private router: Router,
    private adminauthService: AdminauthService
  ) {}

  checkLogin() {
    if (this.adminauthService.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.inValidLogin = false;
    } else {
      this.inValidLogin = true;
      alert('Wrong Credintials');
      // this.router.navigate(['home']);
    }
  }
}
