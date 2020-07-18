import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (!req || !req.url || (req.url.startsWith('http') && !(req.url.startsWith('localhost:8080/api')))) {
      return next.handle(req);
    }

    const jwtToken = sessionStorage.getItem('authenticationToken');
    if (jwtToken) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + jwtToken,
        },
      });
    }
    return next.handle(req);
  }
}
