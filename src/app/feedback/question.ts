export class Question {
    question: string;
    result: string = 'Ei vielä vastattu';

    constructor(message: string) {
        this.question = message;
    }
    displayQuestion() {
        return this.question;
    }

}
