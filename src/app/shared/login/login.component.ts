import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../authentication/login.service';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  token = '';

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private router: Router,
              private loginService: LoginService,
              private fb: FormBuilder) {
  }

  login() {
    this.loginService.login({
        username: this.loginForm.get('username')!.value,
        password: this.loginForm.get('password')!.value
      }
    ).subscribe(
      response => this.setToken(response),
      err => console.log(err)
    );
  }

  setToken(response) {
    this.token = response;
    this.navigateToHomePage();
  }

  navigateToHomePage() {
    this.router.navigate(['/todo-list']);
  }
}
