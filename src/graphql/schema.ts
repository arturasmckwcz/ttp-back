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

  type Query {
    questionsWithAnswers: [QuestionWithAnswers]
    verdict(score: Int): Verdict
  }
`;
