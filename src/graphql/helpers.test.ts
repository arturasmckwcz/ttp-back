import sinon, { SinonSandbox } from 'sinon';
import { Answer, Question } from '../db';
import * as utils from '../db/utils';
import { getQuestionsWithAnswers } from './helpers';
import { QuestionWithAnswers } from './__generated__/resolvers-types';

const questions: Question[] = [{ id: 1, question: 'Is this the question?' }];

const answers: Answer[] = [
  { id: 1, questionID: 1, answer: 'Yes', points: 0 },
  { id: 2, questionID: 1, answer: 'No', points: 0 },
];

const questionsWithAnswers: QuestionWithAnswers[] = [
  {
    id: 1,
    question: 'Is this the question?',
    answers: [
      { id: 1, answer: 'Yes', points: 0 },
      { id: 2, answer: 'No', points: 0 },
    ],
  },
];

describe('getQuestionsWithAnswers', () => {
  let sandbox: SinonSandbox;

  beforeAll(() => {
    sandbox = sinon.createSandbox();
    sandbox.stub(utils, 'getQuestions').resolves(questions);
    sandbox.stub(utils, 'getAnswersForQuestion').resolves(answers);
  });

  afterAll(() => sandbox.restore());

  it('should return proper results', async () => {
    expect(await getQuestionsWithAnswers()).toEqual(questionsWithAnswers);
  });
});
