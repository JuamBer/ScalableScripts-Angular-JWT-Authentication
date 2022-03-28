import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    name: '',
    email: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  register(){
    console.log('register()');
    console.log(this.form.getRawValue());
    this.authService.register(this.form.getRawValue()).subscribe(
      (res)=>{
        console.log(res)
      }
    )
  }
}
