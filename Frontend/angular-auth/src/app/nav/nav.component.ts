import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authenticated: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean)=>{
        this.authenticated = auth;
      }
    )
  }

  logOut(){
    this.authService.logOut().subscribe(
      (res)=>{
        this.authenticated = false;
      }
    )
  }
}
