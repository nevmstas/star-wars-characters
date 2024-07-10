import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ICharacter } from "../types/types";

const fetchCharacter = async (id: string) => {
  const { data } = await axios.get<ICharacter>(
    `${import.meta.env.VITE_ENDPOINT}/people/${id}`
  );
  return data;
};

export const useCharacterDetail = (id: string) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id),
  });
};
