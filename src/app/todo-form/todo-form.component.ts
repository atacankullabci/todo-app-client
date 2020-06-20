import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoComponent} from '../todo/todo.component';
import {TodoService} from '../todo/todo.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../user/user.service';

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
    private userService: UserService,
    private loginservice: AuthenticationService,
  ) {
  }

  ngOnInit() {
    this.todo = new TodoComponent();
    this.fetchUser();

    this.toDoId$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('id')));
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.todo.itemList = [];
    } else {
      this.getItemList();
    }
    this.populateTodo();
  }

  fetchUser() {
    const userName: string = this.loginservice.getLoggedUser();

    if (userName) {
      this.userService.getUserByUserName(userName).subscribe(response => {
        this.todo.user = response.body;
      });
    }
  }

  populateTodo() {
    if (this.id) {
      this.todoService.find(this.id).subscribe(response => {
        this.todo.todoName = response.body.todoName;
      });
    }
  }

  getItemList() {
    this.todoService.fetchItems(this.id).subscribe(response => this.setItemList(response));
  }

  setItemList(response) {
    this.todo.itemList = response.body.valueOf();
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
