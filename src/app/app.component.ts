import {Component} from '@angular/core';
import {LoginService} from './authentication/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(private loginService: LoginService) {
    this.title = 'To Do List';
    this.authenticate();
  }

  authenticate(): boolean {
    if (this.loginService.isUserLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
