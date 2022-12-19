import { getQuestionsWithAnswers, getVerdict } from './helpers';

export const resolvers = {
  Query: {
    questionsWithAnswers: async () => {
      return await getQuestionsWithAnswers();
    },
    verdict: async (_: unknown, { score }: { score: number }) => {
      return await getVerdict(score);
    },
  },
};
