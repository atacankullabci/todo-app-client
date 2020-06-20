import {Component} from '@angular/core';
import {AuthenticationService} from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(private loginService: AuthenticationService) {
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
