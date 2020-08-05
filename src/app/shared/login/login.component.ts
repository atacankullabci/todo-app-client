import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../authentication/login.service';
import {FormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';


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
              private fb: FormBuilder,
              private toastr: ToastrService) {
  }

  login() {
    this.loginService.login({
        username: this.loginForm.get('username')!.value,
        password: this.loginForm.get('password')!.value
      }
    ).subscribe(
      response => this.setToken(response),
      err => this.errorMsg()
    );
  }

  setToken(response) {
    this.toastr.success('Login Successful !');
    this.token = response;
    this.navigateToHomePage();
  }

  errorMsg() {
    this.toastr.error('Login failed !');
  }

  navigateToHomePage() {
    this.router.navigate(['/todo-list']);
  }
}
