import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient
  ) { }

  getUser() {
    return this.http.get(`${this.API_URL}/user`, { withCredentials: true });
  }

  login(value: any){
    return this.http.post(`${this.API_URL}/login`, value, { withCredentials: true });
  }

  register(value: any){
    return this.http.post(`${this.API_URL}/register`, value);
  }

  logOut(){
    return this.http.post(`${this.API_URL}/logout`, {},{ withCredentials: true });
  }
}
