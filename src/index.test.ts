import { graphql } from 'graphql';
import { readFileSync } from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';
import sinon, { SinonSandbox } from 'sinon';

import { resolvers } from './graphql/resolvers';
import * as helpers from './graphql/helpers';

const typeDefs = readFileSync('./src/graphql/schema.graphql', {
  encoding: 'utf-8',
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

describe('Schema', () => {
  describe('questionsWithAnswers', () => {
    it('should return result of proper type', async () => {
      const QuestionsWithAnswersDocument = `
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
      const response = (await graphql({
        schema,
        source: QuestionsWithAnswersDocument,
      })) as {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: { questionsWithAnswers: Record<string, any>[] };
      };

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

  describe('verdict', () => {
    let sandbox: SinonSandbox;

    beforeAll(() => {
      sandbox = sinon.createSandbox();
      sandbox
        .stub(helpers, 'getVerdict')
        .resolves({ score: 50, verdict: 'Blah-blah-blah' });
    });

    afterAll(() => sandbox.restore());

    it('should return result of proper type', async () => {
      const VerdictDocument = `
        {
          verdict (score: 50) {
            score
            verdict
          }
        }
      `;
      const response = (await graphql({
        schema,
        source: VerdictDocument,
      })) as {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: { verdict: Record<string, unknown> };
      };

      expect(Object.keys(response?.data?.verdict)).toEqual([
        'score',
        'verdict',
      ]);
    });
  });
});
