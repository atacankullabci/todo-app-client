import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthenticationProvider} from '../../core/auth/auth-jwt.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

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


  constructor(private fb: FormBuilder,
              private authProvider: AuthenticationProvider,
              private route: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
  }

  signup() {
    this.authProvider.sendVerificationMail(this.signupForm.value).subscribe(() => {
      this.route.navigate(['/login']);
    }, () => {
      this.toastr.error('Registration failed ! Please try again');
    });
  }
}
