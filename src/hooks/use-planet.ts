import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getIdFromUrl } from "../utils/getIdFromUrl";
import { IVehicle } from "../types/types";

const fetchPlanet = async (id: string) => {
  const { data } = await axios.get<IVehicle>(
    `${import.meta.env.VITE_ENDPOINT}/planets/${id}`
  );
  return data;
};

export const usePlanet = (url: string) => {
  const id = getIdFromUrl(url);
  return useQuery({
    queryKey: ["planet", id],
    queryFn: () => fetchPlanet(id),
  });
};
