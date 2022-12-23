import { QuestionsAndAnswers } from '../db';
import {
  getQuestionsWithAnswers,
  getVerdict,
  setQuestionsAndAnswers,
} from './helpers';
import {
  MutationSetQuestionsAndAnswersArgs,
  QueryVerdictArgs,
  QuestionWithAnswers,
} from './__generated__/resolvers-types';

export const resolvers = {
  Query: {
    questionsWithAnswers: async (): Promise<QuestionWithAnswers[]> => {
      return await getQuestionsWithAnswers();
    },
    verdict: async (_: unknown, { score }: QueryVerdictArgs) => {
      return await getVerdict(score as number);
    },
  },
  Mutation: {
    setQuestionsAndAnswers: async (
      _: unknown,
      { questionsAndAnswers }: MutationSetQuestionsAndAnswersArgs
    ): Promise<boolean> => {
      return setQuestionsAndAnswers(questionsAndAnswers as QuestionsAndAnswers);
    },
  },
};
