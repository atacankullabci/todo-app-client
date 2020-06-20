import {Component, OnInit} from '@angular/core';
import {TodoComponent} from '../todo/todo.component';
import {EnumItemStatus} from '../shared/enum/EnumItemStatus';
import {EnumItemDependency} from '../shared/enum/EnumItemDependency';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: number;
  todoRefId: string;
  todoId: number;
  name: string;
  description: string;
  deadline: Date;
  status: EnumItemStatus;
  dependency: EnumItemDependency;
  todo: TodoComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
