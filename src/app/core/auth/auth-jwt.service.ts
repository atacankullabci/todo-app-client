import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../login/login.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Signup} from '../signup/signup.model';
import {Router} from '@angular/router';

type JwtToken = {
  authenticationToken: string;
  refreshToken: string;
};

@Injectable({providedIn: 'root'})
export class AuthenticationProvider {

  authUrl: string;

  constructor(private http: HttpClient, private router: Router) {
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
    this.router.navigate(['/']);
  }

  sendVerificationMail(signup: Signup) {
    return this.http.post<void>(this.authUrl + '/sign-up', signup);
  }

  private authenticateSuccess(response: JwtToken): void {
    const jwtToken = response;
    if (jwtToken) {
      sessionStorage.setItem('authenticationToken', jwtToken.authenticationToken);
      sessionStorage.setItem('refreshToken', jwtToken.refreshToken);
    }
  }
}
