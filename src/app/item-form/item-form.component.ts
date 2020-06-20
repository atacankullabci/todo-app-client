import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemComponent} from '../item/item.component';
import {ItemService} from '../item/item.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TodoComponent} from '../todo/todo.component';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  toDoId$: Observable<string>;
  itemId$: Observable<string>;

  todoId: string;
  itemId: string;
  item: ItemComponent;
  todo: TodoComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService) {
    this.item = new ItemComponent();
  }

  ngOnInit() {
    this.toDoId$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('todoId')));
    this.todoId = this.route.snapshot.paramMap.get('todoId');
    this.item.todoRefId = this.todoId;

    this.itemId$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('itemId')));
    this.itemId = this.route.snapshot.paramMap.get('itemId');
    if (this.itemId) {
      this.fetchItem();
    }
  }

  fetchItem() {
    this.itemService.findById(this.itemId).subscribe(response => {
      this.item = response.body;
    });
  }

  onSubmit() {
    if (this.item.name) {
      if (this.itemId) {
        this.itemService.update(this.item, this.itemId).subscribe(result => this.gotoTodoList());
      } else {
        this.itemService.save(this.item).subscribe(result => this.gotoTodoList());
      }
    }
  }

  gotoTodoList() {
    this.router.navigate(['/todo-list/item-list/', this.todoId]);
  }

  previousState() {
    window.history.back();
  }
}
