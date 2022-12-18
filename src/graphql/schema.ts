export const typeDefs = `#graphql
  type Answer {
    id: Int
    answer: String
  }
  type QuestionWithAnswers {
    id: Int
    question: String
    answers: [Answer]
  }

  type Query {
    questionsWithAnswers: [QuestionWithAnswers]
  }
`;
