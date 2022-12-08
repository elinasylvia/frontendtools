import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  person: Person;
  checked: any = false;
  showTermsError: boolean = false;



  onSubmit(e: any) {
    console.log(e.value.firstName, e.value.lastName, e.value.id);
    console.log(e.controls['firstName'].status, e.controls['lastName'].status, e.controls['id']);

    this.showTermsError = !this.checked;
  }
  constructor() {
    this.person = new Person();
  }

  ngOnInit(): void {
  }

}
