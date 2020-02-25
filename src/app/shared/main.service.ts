import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainService {

  _URL = environment.url;

  constructor(private http: HttpClient) { }


  async createUser(data) {
    return this.http.post(`${this._URL}/register/create`, data)
  }

  async checkEmail(email) {  
    return this.http.post(`${this._URL}/register/check`,{email})
  }
}
