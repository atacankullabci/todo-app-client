import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = 'To-Do List Application';

  constructor(public loginService: AuthenticationService) {
  }

  ngOnInit() {
  }

  logOut() {
    this.loginService.logOut();
  }
}
