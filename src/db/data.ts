import { QuestionsAndAnswers } from './types';

export const questionsAndAnswers: QuestionsAndAnswers = {
  questions: [
    { id: 1, question: 'Question #1' },
    { id: 2, question: 'Question #2' },
    { id: 3, question: 'Question #3' },
    { id: 4, question: 'Question #4' },
  ],
  answers: [
    { id: 1, questionID: 1, answer: 'Answer #1 to Question #1', points: 10 },
    { id: 2, questionID: 1, answer: 'Answer #2 to Question #1', points: 20 },
    { id: 3, questionID: 1, answer: 'Answer #3 to Question #1', points: 30 },
    { id: 4, questionID: 2, answer: 'Answer #1 to Question #2', points: 10 },
    { id: 5, questionID: 2, answer: 'Answer #2 to Question #2', points: 30 },
    { id: 6, questionID: 3, answer: 'Answer #1 to Question #3', points: 10 },
    { id: 7, questionID: 3, answer: 'Answer #2 to Question #3', points: 20 },
    { id: 8, questionID: 3, answer: 'Answer #3 to Question #3', points: 30 },
    { id: 9, questionID: 4, answer: 'Answer #1 to Question #4', points: 10 },
    { id: 10, questionID: 4, answer: 'Answer #2 to Question #4', points: 30 },
  ],
};
