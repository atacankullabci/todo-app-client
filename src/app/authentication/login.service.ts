import {Injectable} from '@angular/core';
import {Login} from '../core/login/login.model';
import {AuthenticationProvider} from '../core/auth/auth-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private authenticationProvider: AuthenticationProvider) {
  }

  login(login: Login) {
    return this.authenticationProvider.login(login);
  }

  logOut() {
    this.authenticationProvider.logout();
  }

  getLoggedUser() {
    return sessionStorage.getItem('username');
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }
}
