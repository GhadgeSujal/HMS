import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminauthService {
  constructor() {}
  authenticate(username: string, password: string) {
    if (username === 'sujal' && password === 'sujal@123') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLogedIn() {
    console.log('User Login ho gaya hai');
    let user = sessionStorage.getItem('username');
    return !(user == null);
  }

  logout() {
    console.log('User logout ho gaya hai');
    sessionStorage.removeItem('username');
  }
}
