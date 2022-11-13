import { Component, OnInit } from '@angular/core';
import { RangeValueAccessor } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttonValues: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  result: string = "";

  addValue(buttonValue: string) {
    console.log(buttonValue);

    const lastInputCharacter = this.result.slice(-1);
    const operators = ["+", "-", "/", "*"];

    if (operators.includes(lastInputCharacter) && operators.includes(buttonValue)) {
      return;
    }

    if (buttonValue === "=") {
      this.result = eval(this.result);

    }
    else if (buttonValue === "C") {
      this.result = "";
    }
    else {
      this.result = this.result + buttonValue;
    }

  }


  constructor() { }

  ngOnInit(): void {
  }

}
