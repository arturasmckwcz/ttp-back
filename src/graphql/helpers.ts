import { getAnswersForQuestion, getQuestions } from '../db';
import getQuote from '../verdict/getQuote';
import { QuestionWithAnswers, Verdict } from './types';

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

export const getVerdict = async (score: number): Promise<Verdict> => {
  const { content, author } = await getQuote();

  return {
    score,
    verdict: `You have scored ${score}\n${author} says "${content}"`,
  };
};
