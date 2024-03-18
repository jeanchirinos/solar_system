import type { QuestionsInfo } from "@/types/Question";

export async function getQuestions() {
  const response = await fetch(
    `https://api-sistemasolar.nijui.com/api/questions?limit=10&random=true`,
  );

  const data = await response.json();

  return data as QuestionsInfo;
}
