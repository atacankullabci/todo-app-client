import {Component, OnInit} from '@angular/core';
import {ItemComponent} from '../item/item.component';
import {ItemService} from '../item/item.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  toDoId$: Observable<string>;
  id: string;
  items: ItemComponent[];

  constructor(private itemService: ItemService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.toDoId$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('todoId')));
    this.id = this.route.snapshot.paramMap.get('todoId');
    if (this.id) {
      this.populateItems();
    }
  }

  isDone(status): boolean {
    if (status === 'UNDONE') {
      return false;
    } else {
      return true;
    }
  }

  checkAsDone(item) {
    debugger;
    if (item.status === 'UNDONE') {
      item.status = 'DONE';
    } else {
      item.status = 'UNDONE';
    }
    this.itemService.update(item, item.id).subscribe();
  }

  populateItems() {
    this.itemService.findAll(this.id).subscribe(response => this.setItems(response));
  }

  setItems(response) {
    this.items = response.body;
  }

  onDelete(id: number) {
    this.itemService.delete(id).subscribe(() => this.populateItems());
  }

  previousState() {
    window.history.back();
  }
}
