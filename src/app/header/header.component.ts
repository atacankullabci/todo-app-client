import {Component, OnInit} from '@angular/core';
import {LoginService} from '../authentication/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = 'To-Do List Application';

  constructor(public loginService: LoginService) {
  }

  ngOnInit() {
  }

  logOut() {
    this.loginService.logOut();
  }
}
