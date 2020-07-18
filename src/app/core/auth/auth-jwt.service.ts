import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../login/login.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

type JwtToken = {
  authenticationToken: string;
};

@Injectable({providedIn: 'root'})
export class AuthenticationProvider {

  authUrl: string;

  constructor(private http: HttpClient) {
    this.authUrl = 'http://localhost:8080/api/auth';
  }

  getToken(): string {
    return sessionStorage.retrieve('authenticationToken');
  }

  login(credentials: Login): Observable<void> {
    return this.http.post<JwtToken>(this.authUrl + '/login', credentials)
      .pipe(map(response => this.authenticateSuccess(response)));
  }

  logout() {
    sessionStorage.clear();
  }

  private authenticateSuccess(response: JwtToken): void {
    const jwtToken = response.authenticationToken;
    if (jwtToken) {
      sessionStorage.setItem('authenticationToken', jwtToken);
    }
  }
}
