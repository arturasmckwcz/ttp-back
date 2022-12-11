import { getAnswersForQuestion, getQuestions } from '../db';

export const getQuestionsWithAnswers = async (): Promise<
  {
    question: string;
    answers: Array<string>;
  }[]
> => {
  const questions = await getQuestions();
  return await Promise.all(
    questions.map(async question => ({
      question: question.question,
      answers: (
        await getAnswersForQuestion(question.id)
      ).map(({ answer }) => answer),
    }))
  );
};
