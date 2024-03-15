import type { PlanetName } from "./Planet";

type Satellite = {
  id: number;
  name: string;
  planet: PlanetName;
  planet: string;
  description: string;
  diameter: string;
  mass: string | null;
  webp: string | null;
  png: string | null;
};

export type SatellitesInfo = {
  info: {
    count: number;
  };
  satellites: Satellite[];
};
