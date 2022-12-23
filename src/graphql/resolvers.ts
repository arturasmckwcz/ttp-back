import { QuestionsAndAnswers } from '../db';
import {
  getQuestionsWithAnswers,
  getVerdict,
  setQuestionsAndAnswers,
} from './helpers';

export const resolvers = {
  Query: {
    questionsWithAnswers: async () => {
      return await getQuestionsWithAnswers();
    },
    verdict: async (_: unknown, { score }: { score: number }) => {
      return await getVerdict(score);
    },
  },
  Mutation: {
    setQuestionsAndAnswers: async (
      _: unknown,
      { questionsAndAnswers }: { questionsAndAnswers: QuestionsAndAnswers }
    ): Promise<boolean> => {
      return setQuestionsAndAnswers(questionsAndAnswers);
    },
  },
};
