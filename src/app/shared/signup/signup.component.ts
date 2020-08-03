import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationProvider} from '../../core/auth/auth-jwt.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]]
  });


  constructor(private fb: FormBuilder, private authProvider: AuthenticationProvider) {
  }

  ngOnInit(): void {
  }

  signup() {
    this.authProvider.sendVerificationMail(this.signupForm.value).subscribe();
  }

}