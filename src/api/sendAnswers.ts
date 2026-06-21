import { ENV } from "@/constants/env";
import type { AnswersResult } from "@/types/Question";

export async function sendAnswers(answersIds: string) {
  const response = await fetch(
    `${ENV.API_URL}/api/get-answer/${answersIds}`,
  );

  const data = await response.json();

  return data as AnswersResult;
}
