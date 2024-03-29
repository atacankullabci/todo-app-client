import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoComponent} from '../todo/todo.component';
import {TodoService} from '../todo/todo.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  toDoId$: Observable<string>;
  id: string;
  todo: TodoComponent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
  ) {
  }

  ngOnInit() {
    this.todo = new TodoComponent();

    this.toDoId$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('id')));
    this.id = this.route.snapshot.paramMap.get('id');
    this.populateTodo();
  }

  populateTodo() {
    if (this.id) {
      this.todoService.find(this.id).subscribe(response => {
        this.todo.todoName = response.body.todoName;
      });
    }
  }

  onSubmit() {
    if (this.todo.todoName) {
      if (this.id) {
        this.todoService.update(this.todo, this.id).subscribe(result => this.gotoTodoList());
      } else {
        this.todoService.save(this.todo).subscribe(result => this.gotoTodoList());
      }
    }
  }

  gotoTodoList() {
    this.router.navigate(['/todo-list']);
  }

  previousState() {
    window.history.back();
  }
}
