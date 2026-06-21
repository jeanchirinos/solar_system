import { ENV } from "@/constants/env";
import type { SatellitesInfo } from "@/types/Satellite";

export async function getSatellites() {
  const response = await fetch(
    `${ENV.API_URL}/api/satellites`,
    {
      cache: "force-cache",
    },
  );

  const data = await response.json();

  return data as SatellitesInfo;
}
