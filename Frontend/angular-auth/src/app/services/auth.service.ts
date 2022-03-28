import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:8080/api';

  constructor(
    private http: HttpClient
  ) { }

  login(value: any){
    return this.http.post(`${this.API_URL}/login`, value);
  }

  register(value: any){
    return this.http.post(`${this.API_URL}/register`, value);
  }
}
