import type { SatellitesInfo } from "@/types/Satellite";

export async function getSatellites() {
  const response = await fetch(
    `https://api-sistemasolar.nijui.com/api/satellites`,
    {
      cache: "force-cache",
    },
  );

  const data = await response.json();

  return data as SatellitesInfo;
}
