import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {
  currentUser: any;
  currentPass: any;
  email = 'user@hamoye.com';
  password = 'user123!';

  constructor(private router: Router, private toastr: ToastrService) {}

  success(): void {
    this.toastr.success('Login Successful', "", {timeOut: 2000});
  }

  error(value: any): void {
    this.toastr.error(value, "", {timeOut: 3000});
  }

  login(user: any) {
    this.currentUser = user.email;
    this.currentPass = user.password;

    if (this.currentUser !== this.email && this.currentPass !== this.password) {
      this.error('Invalid credentials');
    } else {
      if (this.currentPass !== this.password) {
        this.error('Wrong password');
      } else if (this.currentUser !== this.email) {
        this.error('Wrong email address');
      } else {
        this.success();
        localStorage.setItem('current-user', this.currentUser);
        this.router.navigate(['/dashboard']);
      }
    }
  }
}
