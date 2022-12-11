import { questions, answers } from './data';
import { Answer, Question } from './types';

export const getQuestions = async (): Promise<Question[]> => questions;

export const getAnswers = async (): Promise<Answer[]> => answers;

export const getAnswersForQuestion = async (
  questionID: number
): Promise<Answer[]> => {
  const answers = await getAnswers();
  return answers.filter(answer => answer.questionID === questionID);
};
