import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  questionsArray: Question[];

  constructor(fbService: FeedbackService) {
    fbService.getData();
    this.questionsArray = fbService.getData();
  }


  ngOnInit(): void { }
  onInputChange(event: any, question: Question): void {
    if (event.value === 0) {
      question.result = "Ei vielä vastattu";
    }
    if (event.value === 1) {
      question.result = "Huonosti";
    }
    if (event.value === 2) {
      question.result = "Toisinaan";
    }
    if (event.value === 3) {
      question.result = "Hyvin";
    }

  }



}
