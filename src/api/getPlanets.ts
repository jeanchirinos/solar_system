// import { ENV } from "@/constants/env";
// import type { PlanetsInfo } from "@/types/Planet";
import planets from "@/data/planets.json";

// export async function getPlanets() {
//   const response = await fetch(
//     `${ENV.API_URL}/api/planets`,
//     {
//       cache: "force-cache",
//     },
//   );

//   const data = await response.json();

//   return data as PlanetsInfo;
// }

export async function getPlanets() {
  return planets;
}
