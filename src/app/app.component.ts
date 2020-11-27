import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';
  links = [
    {title: 'Home', path: 'home' },
    {title: 'Contact me ', path: 'contact' },
    {title: 'Logout', path: 'login' }
  ];

  constructor(private router: Router) {}
  logout() {
    this.router.navigateByUrl('/login');
  }
}
