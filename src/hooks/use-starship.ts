import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getIdFromUrl } from "../utils/getIdFromUrl";
import { IVehicle } from "../types/types";

const fetchStarship = async (id: string) => {
  const { data } = await axios.get<IVehicle>(
    `${import.meta.env.VITE_ENDPOINT}/starships/${id}`
  );
  return data;
};

export const useStarship = (url: string) => {
  const id = getIdFromUrl(url);
  return useQuery({
    queryKey: ["vehicle", id],
    queryFn: () => (id ? fetchStarship(id) : null),
  });
};
