import { graphql } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const source = `
  {
    questionsWithAnswers {
      question
      answers
    }
  }
`;

describe('Schema', () => {
  describe('questionsWithAnswers', () => {
    it('should return result of proper type', async () => {
      const response = (await graphql({ schema, source })) as {
        data: { questionsWithAnswers: Record<string, unknown>[] };
      };

      expect(Array.isArray(response?.data?.questionsWithAnswers)).toBeTruthy();
      expect(Object.keys(response?.data?.questionsWithAnswers[0])).toEqual([
        'question',
        'answers',
      ]);
      expect(
        Array.isArray(response?.data?.questionsWithAnswers[0]?.answers)
      ).toBeTruthy();
    });
  });
});
