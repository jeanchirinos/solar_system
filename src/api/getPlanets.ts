import type { PlanetsInfo } from "@/types/Planet";
// import planets from "@/data/planets.json";

export async function getPlanets() {
  const response = await fetch(
    "https://api-sistemasolar.nijui.com/api/planets",
    {
      cache: "force-cache",
    },
  );

  const data = await response.json();

  return data as PlanetsInfo;

  // return planets as PlanetsInfo;
}
