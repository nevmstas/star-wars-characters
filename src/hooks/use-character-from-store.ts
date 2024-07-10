import { useState, useEffect, useCallback } from "react";
import { ICharacter } from "../types/types";
import { StorageKey } from "./constants";

const useCharacterFromStore = (id: string) => {
  const [character, setCharacter] = useState<ICharacter | null>(null);

  const setCharacter_ = useCallback(
    (data: ICharacter) => {
      setCharacter(data);
      localStorage.setItem(StorageKey.Character + id, JSON.stringify(data));
    },
    [id]
  );

  useEffect(() => {
    const characterInStore = localStorage.getItem(StorageKey.Character + id);
    if (characterInStore) {
      setCharacter(JSON.parse(characterInStore));
    }
  }, [id]);

  return [character, setCharacter_] as const;
};

export default useCharacterFromStore;
