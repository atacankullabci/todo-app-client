import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TodoComponent} from './todo.component';
import {ItemComponent} from '../item/item.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl: string;

  constructor(private http: HttpClient) {
    this.todosUrl = 'http://localhost:8080/api/todos';
  }

  findAll(): Observable<TodoComponent[]> {
    return this.http.get<TodoComponent[]>(this.todosUrl);
  }

  find(id: string): Observable<HttpResponse<TodoComponent>> {
    return this.http.get<TodoComponent>(`${this.todosUrl}/${id}`, {observe: 'response'});
  }

  fetchItems(id: string) {
    return this.http.get<ItemComponent[]>(`${this.todosUrl}/items/${id}`, {observe: 'response'});
  }

  update(todo: TodoComponent, id: string): Observable<HttpResponse<TodoComponent>> {
    return this.http.put<TodoComponent>(`${this.todosUrl}/${id}`, todo, {observe: 'response'});
  }

  save(todo: TodoComponent) {
    return this.http.post<TodoComponent>(this.todosUrl, todo, {observe: 'response'});
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.todosUrl}/${id}`, {observe: 'response'});
  }
}
