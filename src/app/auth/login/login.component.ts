import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title: string = 'Hamoye';
  user = {
    email: null,
    password: null
  };

  constructor(private router: Router) // private toastr: ToastrService
  {}

  login(user: any) {
    if (!user) {
      alert('please enter your email and password');
    }
    localStorage.setItem('current-user', user);
  }

  onSubmit(user: any) {
    this.login(user);
    // this.toastr.show("User logged in successfully");
    alert('User logged in successfully');
    console.log(user);
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
