import { GenderEmoji } from "../types/types";

export enum QueryKey {
  Characters = "characters",
}

export enum StorageKey {
  Character = "character",
}

export const genderHash = {
  male: GenderEmoji.Male,
  female: GenderEmoji.Female,
  "n/a": GenderEmoji.Robot,
  hermafrodit: GenderEmoji.Hermafrodit,
};
