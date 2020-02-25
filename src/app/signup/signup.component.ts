import { Error } from './../interfaces/error.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MainService } from '../shared/main.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public hide: boolean;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: MainService) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
      mobileNo: ['',[ Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]],
      userName: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {

  }
  async saveUser() {
    if (this.userForm.valid) {
      (await this.http.createUser(this.userForm.value)).subscribe((res:Error) => {
        if(res.message){
        alert(res.message)}
      else alert(res.error)}, err => { alert(err.message) })
    }
  }

  async checkEmail(event) {
    if(this.email.valid){
     (await this.http.checkEmail(event.target.value)).subscribe(res => {
      console.log(res); 
      if(!res['emailNotTaken']){
       this.email.setErrors({'taken': true});
     }
    else {this.email.setErrors(null)}});

    }
    
}





  get password() {
    return this.userForm.get('password');
  }

  get firstName() {
    return this.userForm.get('firstName');
  }


  get lastName() {
    return this.userForm.get('lastName');
  }
  get userName() {
    return this.userForm.get('userName');
  }

  get email() {
    return this.userForm.get('email');
  }
  get mobileNo() {
    return this.userForm.get('mobileNo');
  }
}
