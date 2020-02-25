import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
loggedIn:boolean
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.showLogout()
  }

  showLogout(){
    if(this.auth.isAuthenticated()){
      this.loggedIn=true 
    }
    else this.loggedIn=false
  
  }

}
