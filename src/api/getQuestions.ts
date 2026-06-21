import { ENV } from "@/constants/env";
import type { QuestionsInfo } from "@/types/Question";

export async function getQuestions() {
  const response = await fetch(
    `${ENV.API_URL}/api/questions?limit=5&random=true`,
    { cache: "no-store" },
  );

  const data = await response.json();

  return data as QuestionsInfo;
}
