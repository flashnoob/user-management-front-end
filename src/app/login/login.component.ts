import { Router } from '@angular/router';
import { Error } from './../interfaces/error.interface';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router:Router ,private authservice: AuthService) {

  }

  ngOnInit() {

  }


  async login() {
    if (this.form.valid) {
      (await this.authservice.loginUser(this.form.value)).subscribe((res: Error) =>
       { alert(res.message)
        if(res.success){

          this.authservice.setSession(res.token);
        this.router.navigateByUrl('articles')
        }
      console.log(res); }, err => { 
        console.log(err); 
        alert(err.error.message) })

    }
    else {

    }

  }
}
