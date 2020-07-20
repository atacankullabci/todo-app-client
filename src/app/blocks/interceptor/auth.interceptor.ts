import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoginService} from '../../authentication/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req || !req.url || req.url.includes('/api/auth')) {
      return next.handle(req);
    }

    const jwtToken = this.loginService.getAuthToken();
    if (jwtToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)
      });
    }
    return next.handle(req);
  }
}
