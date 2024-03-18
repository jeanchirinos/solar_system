// import type { QuestionsInfo } from "@/types/Question";

export async function sendAnswers() {
  const response = await fetch(
    `https://api-sistemasolar.nijui.com/api/get-answer/1,6`,
  );

  const data = await response.json();

  // return data as QuestionsInfo;
}
