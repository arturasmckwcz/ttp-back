import sinon, { SinonSandbox } from 'sinon';
import { Answer, Question } from '../db';
import * as utils from '../db/utils';
import { getQuestionsWithAnswers } from './helpers';

const questions: Question[] = [{ id: 1, question: 'Is this the question?' }];

const answers: Answer[] = [
  { id: 1, questionID: 1, answer: 'Yes' },
  { id: 2, questionID: 1, answer: 'No' },
];

const questionsWithAnswers: { question: string; answers: string[] }[] = [
  {
    question: 'Is this the question?',
    answers: ['Yes', 'No'],
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
