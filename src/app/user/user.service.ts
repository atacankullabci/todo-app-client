import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserComponent} from './user.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/api/users';
  }

  public findAll(): Observable<UserComponent[]> {
    return this.http.get<UserComponent[]>(this.usersUrl);
  }

  public getUserByUserName(userName: string): Observable<HttpResponse<UserComponent>> {
    return this.http.get<UserComponent>(`${this.usersUrl}/${userName}`, {observe: 'response'});
  }

  public save(user: UserComponent) {
    return this.http.post<UserComponent>(this.usersUrl, user);
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.usersUrl}/${id}`, {observe: 'response'});
  }
}
