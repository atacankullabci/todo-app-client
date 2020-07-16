import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionStorageService} from 'ngx-webstorage';

@Injectable({providedIn: 'root'})
export class AuthenticationProvider {

  constructor(private http: HttpClient,
              private sessionStorage: SessionStorageService) {
  }

}
