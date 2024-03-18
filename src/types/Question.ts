type Question = {
  id: number;
  question: string;
  options: {
    id: number;
    option: string;
  }[];
};

export type QuestionsInfo = {
  info: {
    count: number;
  };
  questions: Question[];
};
