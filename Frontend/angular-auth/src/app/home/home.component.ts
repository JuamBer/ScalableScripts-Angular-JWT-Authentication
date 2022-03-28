import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg: string = 'You are not logged in';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(
      (res: any)=>{
        console.log(res);
        this.msg = `Hi ${res.name}`;
        Emitters.authEmitter.emit(true);
      },
      (err) => {
        console.error(err);
        Emitters.authEmitter.emit(false);
      }
    )
  }

}
