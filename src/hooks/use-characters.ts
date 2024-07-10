import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKey } from "./constants";

const fetchCharacters = async (page: number, searchTerm?: string) => {
  const url = new URL(`${import.meta.env.VITE_ENDPOINT}/people`);
  if (searchTerm) {
    url.searchParams.append("search", searchTerm);
  }

  if (page) {
    url.searchParams.append("page", page.toString());
  }

  const { data } = await axios.get(url.toString());
  return data;
};

export const useCharacters = (page: number, searchTerm: string) => {
  return useQuery({
    queryKey: [QueryKey.Characters, page, searchTerm],
    queryFn: () => fetchCharacters(page, searchTerm),
  });
};
