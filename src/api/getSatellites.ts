// import { ENV } from "@/constants/env";
// import type { SatellitesInfo } from "@/types/Satellite";
import satellites from "@/data/satellites.json";

// export async function getSatellites() {
//   const response = await fetch(
//     `${ENV.API_URL}/api/satellites`,
//     {
//       cache: "force-cache",
//     },
//   );

//   const data = await response.json();

//   return data as SatellitesInfo;
// }

export async function getSatellites() {
  return satellites;
}
