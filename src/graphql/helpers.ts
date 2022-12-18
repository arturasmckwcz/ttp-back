import { getAnswersForQuestion, getQuestions } from '../db';

export const getQuestionsWithAnswers = async (): Promise<
  {
    id: number;
    question: string;
    answers: Array<{ id: number; answer: string }>;
  }[]
> => {
  const questions = await getQuestions();
  return await Promise.all(
    questions.map(async question => ({
      id: question.id,
      question: question.question,
      answers: (
        await getAnswersForQuestion(question.id)
      ).map(({ id, answer }) => ({ id, answer })),
    }))
  );
};
