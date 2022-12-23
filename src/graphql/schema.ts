export const typeDefs = `#graphql
  type Answer {
    id: Int
    answer: String
    points: Int
  }

  type QuestionWithAnswers {
    id: Int
    question: String
    answers: [Answer]
  }

  type Verdict {
    score: Int
    verdict: String
  }

  input Question {
    id: Int
    question: String
  }

  input AnswerInput {
    id: Int
    questionID: Int
    points: Int
    answer: String
  }

  input QuestionsAndAnswers {
    questions: [Question]
    answers: [AnswerInput]
  }

  type Mutation {
    setQuestionsAndAnswers(questionsAndAnswers: QuestionsAndAnswers): Boolean
  }

  type Query {
    questionsWithAnswers: [QuestionWithAnswers]
    verdict(score: Int): Verdict
  }
`;
