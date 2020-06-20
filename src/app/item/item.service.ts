import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ItemComponent} from './item.component';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsUrl: string;

  constructor(private http: HttpClient) {
    this.itemsUrl = 'http://localhost:8080/api/items';
  }

  findAll(id: string) {
    const url = this.itemsUrl + '/todo';

    return this.http.get<ItemComponent[]>(`${url}/${id}`, {observe: 'response'});
  }

  findById(id: string): Observable<HttpResponse<ItemComponent>> {
    return this.http.get<ItemComponent>(`${this.itemsUrl}/${id}`, {observe: 'response'});
  }

  update(item: ItemComponent, id: string): Observable<HttpResponse<ItemComponent>> {
    return this.http.put<ItemComponent>(`${this.itemsUrl}/${id}`, item, {observe: 'response'});
  }

  save(item: ItemComponent) {
    return this.http.post<ItemComponent>(this.itemsUrl, item);
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.itemsUrl}/${id}`, {observe: 'response'});
  }
}
