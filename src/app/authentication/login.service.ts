import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../core/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authUrl: string;

  constructor(private http: HttpClient) {
    this.authUrl = 'http://localhost:8080/api/auth';
  }

  login(login: Login) {
    const url = this.authUrl + '/login';

    return this.http.post<Login>(`${url}`, login);
  }

  getLoggedUser() {
    return sessionStorage.getItem('username');
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
