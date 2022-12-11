export const typeDefs = `#graphql
  type QuestionWithAnswers {
    question: String
    answers: [String]
  }

  type Query {
    questionsWithAnswers: [QuestionWithAnswers]
  }
`;
