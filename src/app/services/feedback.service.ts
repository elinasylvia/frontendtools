import { Injectable } from '@angular/core';
import { Question } from '../feedback/question';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  questionsArray: Array<Question>;
  getData(): any {
    return this.questionsArray;
  }
  constructor() {
    this.questionsArray = [new Question("Mitä kuuluu?"), new Question("Oletko jouluihminen?"), new Question("Tuleeko talvesta luminen?")]
  }
}
