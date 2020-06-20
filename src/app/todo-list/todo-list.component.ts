import {Component, OnInit} from '@angular/core';
import {TodoComponent} from '../todo/todo.component';
import {TodoService} from '../todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: TodoComponent[];

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.refresh();
  }

  onDelete(id: number) {
    this.todoService.delete(id).subscribe(() => this.refresh());
  }

  refresh() {
    this.todoService.findAll().subscribe(data => {
      this.todos = data;
    });
  }
}
