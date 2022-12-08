import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public email = "";
  public passwrd = "";

  onSubmit() {


    this.router.navigate(['admin']);
  }
  cancel() {
    this.router.navigate(['hello'])
  }
  constructor(public router: Router, public aservice: AuthServiceService) { }

  login(): void {
    console.log(this.email)
    console.log(this.passwrd)
    this.aservice.login(this.email, this.passwrd);
  }

  ngOnInit(): void {
  }

}
