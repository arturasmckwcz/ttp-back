import { graphql } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const source = `
  {
    questionsWithAnswers {
      id
      question
      answers {
        id
        answer
      }
    }
  }
`;

describe('Schema', () => {
  describe('questionsWithAnswers', () => {
    it('should return result of proper type', async () => {
      const response = (await graphql({ schema, source })) as {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: { questionsWithAnswers: Record<string, any>[] };
      };

      expect(Array.isArray(response?.data?.questionsWithAnswers)).toBeTruthy();
      expect(Object.keys(response?.data?.questionsWithAnswers[0])).toEqual([
        'id',
        'question',
        'answers',
      ]);
      expect(
        Object.keys(response?.data?.questionsWithAnswers[0]?.answers[0])
      ).toEqual(['id', 'answer']);
      expect(
        Array.isArray(response?.data?.questionsWithAnswers[0]?.answers)
      ).toBeTruthy();
    });
  });
});
