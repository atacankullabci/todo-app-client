import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication/authentication.service';
import {UserService} from '../user/user.service';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  invalidLogin = true;
  userList: UserComponent[];

  constructor(private router: Router,
              private loginService: AuthenticationService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.findAll().subscribe(response => {
      this.userList = response;
    });
  }

  login() {
    for (const user of this.userList) {
      if (user.userName === this.username && user.password === this.password) {
        this.loginService.authenticate(user.userName);
        this.router.navigate(['/todo-list']);
        this.invalidLogin = false;
        break;
      }
    }
    if (this.invalidLogin) {
      alert('Either username or password has been entered wrong.');
    }
  }
}
