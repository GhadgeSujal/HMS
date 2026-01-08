import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
@Component({
  selector: 'app-doclogin',
  templateUrl: './doc-login.component.html',
  styleUrls: ['./doc-login.component.css'],
})
export class DocloginComponent {
  username2: string = '';
  password: string = '';

  inValidLogin = false;

  constructor(private router: Router, private docauth: DocauthService) {}

  checkLogin() {
    if (this.docauth.authenticate(this.username2, this.password)) {
      this.router.navigate(['docdash']);
      this.inValidLogin = false;
    } else {
      this.inValidLogin = true;
      alert('Wrong Credintials');
      // this.router.navigate(['home']);
    }
  }
}
