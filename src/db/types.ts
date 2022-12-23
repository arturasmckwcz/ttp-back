export type Question = {
  id: number;
  question: string;
};

export type Answer = {
  id: number;
  questionID: number;
  answer: string;
  points: number;
};

export type QuestionsAndAnswers = {
  questions: Question[];
  answers: Answer[];
};
