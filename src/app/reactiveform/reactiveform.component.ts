import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  registrationForm: FormGroup;
  onSubmit() {
    console.log('registrationForm.value ' + this.registrationForm.value);
  }

  constructor() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      id: new FormControl('', [Validators.required, Validators.pattern("^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([0-9]\\d+|\\d\\d-|[0-9]\\dA)\\d{3}[\\dA-Z]$")]),
      email: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$")]),
      confirmPwrd: new FormControl('', [Validators.required])

    });
  }

  get firstName() {
    return this.registrationForm.get('firstName')
  }
  get lastName() {
    return this.registrationForm.get('lastName')
  }
  get id() {
    return this.registrationForm.get('id')
  }
  get email() {
    return this.registrationForm.get('email')
  }
  get username() {
    return this.registrationForm.get('username')
  }
  get password() {
    return this.registrationForm.get('password')
  }
  get confirmPwrd() {
    return this.registrationForm.get('confirmPwrd')
  }



  ngOnInit(): void {
  }
}



