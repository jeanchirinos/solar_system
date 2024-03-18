import type { AnswersResult } from "@/types/Question";

export async function sendAnswers(answersIds: string) {
  const response = await fetch(
    `https://api-sistemasolar.nijui.com/api/get-answer/${answersIds}`,
  );

  const data = await response.json();

  return data as AnswersResult;
}
