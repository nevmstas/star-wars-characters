export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  vehicles: string[];
  starships: string[];
  url: string;
}

export interface IVehicle {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  url: string;
}

export enum GenderEmoji {
  Male = "👨",
  Female = "👱‍♀️",
  Robot = "🤖",
  Hermafrodit = "👽",
}
