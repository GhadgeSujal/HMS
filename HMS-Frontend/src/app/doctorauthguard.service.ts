import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorauthguardService implements CanActivate {
  constructor(private docauthService: DocauthService, private router: Router) {}

  canActivate(): boolean {
    console.log('Doctor Auth Guard Triggered');

    if (this.docauthService.isUserLogedIn()) {
      console.log('Doctor is logged in');
      return true;
    } else {
      console.log('Doctor NOT logged in');
      this.router.navigate(['doc-login']);
      return false;
    }
  }
}
