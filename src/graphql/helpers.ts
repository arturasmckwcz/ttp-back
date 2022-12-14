import {
  getAnswersForQuestion,
  getQuestions,
  QuestionsAndAnswers,
  setDatabase,
} from '../db';
import getQuote from '../verdict/getQuote';
import { QuestionWithAnswers, Verdict } from './__generated__/resolvers-types';

export const getQuestionsWithAnswers = async (): Promise<
  QuestionWithAnswers[]
> => {
  const questions = await getQuestions();
  return await Promise.all(
    questions.map(async question => ({
      id: question.id,
      question: question.question,
      answers: (
        await getAnswersForQuestion(question.id)
      ).map(({ id, answer, points }) => ({ id, answer, points })),
    }))
  );
};

export const getVerdict = async (score = 0): Promise<Verdict> => {
  const { content, author } = await getQuote();

  return {
    score,
    verdict: `${author} says: "${content}"`,
  };
};

export const setQuestionsAndAnswers = async (
  questionsAndAnswers: QuestionsAndAnswers
): Promise<boolean> => {
  setDatabase(questionsAndAnswers);
  return true;
};
