import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocauthService {
  constructor() {}
  authenticate(username2: string, password: string) {
    if (username2 === 'doctor' && password === 'doc@123') {
      sessionStorage.setItem('username2', username2);
      return true;
    } else {
      return false;
    }
  }

  isUserLogedIn(){
    console.log('Doctor Login ho gaya hai');
    let user = sessionStorage.getItem('username2');
    return !(user == null);
  }

  logout(){
    console.log('Doctor logout ho gaya hai');
    sessionStorage.removeItem('username2');
  }
}
  