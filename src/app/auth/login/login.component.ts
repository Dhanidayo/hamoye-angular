import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title: string = 'Hamoye';
  myForm: FormGroup;
  user = {
    email: null,
    password: null,
  };

  error_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'please enter a valid email address.' },
    ],

    password: [
      { type: 'required', message: 'password is required.' },
      {
        type: 'minlength',
        message: 'Password should be a minumum of 6 characters.',
      },
    ],
  };

  constructor(private router: Router, public formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ])
      ),
    });
  }

  ngOnInit() {}

  login(user: any) {
    if (!user) {
      alert('please enter your email and password');
    }
    localStorage.setItem('current-user', user);
  }

  onSubmit(user: any) {
    this.login(user);
    alert('User logged in successfully');
    console.log(user);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
