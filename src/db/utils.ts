import { questionsAndAnswers } from './data';
import { Answer, Question, QuestionsAndAnswers } from './types';

export const getQuestions = async (): Promise<Question[]> =>
  questionsAndAnswers.questions;

export const getAnswers = async (): Promise<Answer[]> =>
  questionsAndAnswers.answers;

export const getAnswersForQuestion = async (
  questionID: number
): Promise<Answer[]> => {
  const answers = await getAnswers();
  return answers.filter(answer => answer.questionID === questionID);
};

export const setDatabase = async (qaa: QuestionsAndAnswers): Promise<void> => {
  questionsAndAnswers.questions = [...qaa.questions];
  questionsAndAnswers.answers = [...qaa.answers];
};
