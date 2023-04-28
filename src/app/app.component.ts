import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hamoye-angular';
  user = {
    email: null,
    password: null,
  };

  constructor(private router: Router) // private toastr: ToastrService
  {}

  login(user: any) {
    if (!user) {
      alert('please enter your email and password');
    }
    localStorage.setItem('current-user', user);
    this.goToDashboard();
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
