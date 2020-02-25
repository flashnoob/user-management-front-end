import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _URL = environment.url;

  constructor(private http: HttpClient) { }
  async loginUser(data) {  
    return this.http.post(`${this._URL}/register/login`,{data})
  }

  isAuthenticated (){
    if (localStorage.getItem("id_token") === null) {
      return false
    }
    else return true
  }
  async setSession(authResult) {
    // const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult);
    // localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
}        
}

