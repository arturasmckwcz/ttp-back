export type QuestionWithAnswers = {
  id: number;
  question: string;
  answers: Array<{ id: number; answer: string; points: number }>;
};

export type Verdict = { score: number; verdict: string };
