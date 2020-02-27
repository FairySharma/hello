import { Injectable } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private loginService: LoginServiceService,) { }

  // authenticateUser(user : LoginModel){
  //   return this.loginService.http.post('users/login', user).map(res => res.json());

  // }
}
