export enum PlanetName {
  Eris = "Eris",
  Haumea = "Haumea",
  Júpiter = "Júpiter",
  Makemake = "Makemake",
  Marte = "Marte",
  Neptuno = "Neptuno",
  Plutón = "Plutón",
  Saturno = "Saturno",
  Tierra = "Tierra",
  Urano = "Urano",
}

export type Planet = {
  id: number;
  name: PlanetName;
  planet_type: {
    id: number;
    name: "Planetas" | "Planetas Enanos";
  };
  description: string;
  orbital_distance: string;
  orbital_period: string;
  radius: string;
  volume: string;
  diameter: string;
  mass: string;
  density: string;
  gravity: string;
  temperature: string;
  atmosphere: string;
  webp: string | null;
  png: string | null;
};

export type PlanetsInfo = {
  info: {
    count: number;
  };
  planets: Planet[];
};
