import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<any>(this.baseUrl, { username, password });
  }

  saveUser(user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem('user') || 'null');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  isAdmin(): boolean {
  return sessionStorage.getItem('role') === 'ADMIN';
}

isDoctor(): boolean {
  return sessionStorage.getItem('role') === 'DOCTOR';
}


  logout() {
    sessionStorage.clear();
  }
}

