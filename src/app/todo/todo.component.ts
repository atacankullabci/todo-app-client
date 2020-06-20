import {Component, OnInit} from '@angular/core';
import {UserComponent} from '../user/user.component';
import {ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todoName: string;
  itemList: ItemComponent[];
  user: UserComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
