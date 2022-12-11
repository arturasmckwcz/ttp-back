import { questions, answers } from './data';

export type Question = {
  id: number;
  question: string;
};

export type Answer = {
  id: number;
  questionID: number;
  answer: string;
};

export const getQuestions = async (): Promise<Question[]> => questions;

export const getAnswers = async (): Promise<Answer[]> => answers;

export const getAnswersForQuestion = async (
  questionID: number
): Promise<Answer[]> => {
  const answers = await getAnswers();
  return answers.filter(answer => answer.questionID === questionID);
};
