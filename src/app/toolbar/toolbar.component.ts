import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  userEmail$: Observable<string>;

  loginText = "Sign in";
  logoutText = "Sign out";

  constructor(private authservice: AuthServiceService, private router: Router) {
    this.userEmail$ = authservice.checkLoggedInUser();
  }

  logout() {
    this.authservice.logout();
  }

  login() {
    this.router.navigate(['admin-login']);
  }

  getLoggedInUserEmail() {
    return this.authservice.getLoggedInUserEmail();
  }

  ngOnInit(): void {
  }

}
