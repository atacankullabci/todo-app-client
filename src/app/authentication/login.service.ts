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

  getAuthToken() {
    return sessionStorage.getItem('authenticationToken');
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticationToken');
    return !(user === null);
  }
}
