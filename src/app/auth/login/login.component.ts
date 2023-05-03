import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthServices } from 'src/app/_services/auth.service';

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
      { type: 'pattern', message: 'Please enter a valid email address.' },
    ],

    password: [{ type: 'required', message: 'Password is required.' }],
  };

  constructor(
    public formBuilder: FormBuilder,
    private authService: AuthServices
  ) {
    this.myForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
        ])
      ),
      password: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {}

  onSubmit(user: any) {
    this.authService.login(user);
  }
}
