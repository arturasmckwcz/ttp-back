import { getQuestionsWithAnswers } from './helpers';

export const resolvers = {
  Query: {
    questionsWithAnswers: () => getQuestionsWithAnswers(),
  },
};
