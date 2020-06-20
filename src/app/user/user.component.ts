import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  todoList: [];

  constructor() {
  }

  ngOnInit() {
  }

}
