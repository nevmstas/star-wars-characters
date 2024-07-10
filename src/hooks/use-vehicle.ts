import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getIdFromUrl } from "../utils/getIdFromUrl";
import { IVehicle } from "../types/types";

const fetchVehicle = async (id: string) => {
  const { data } = await axios.get<IVehicle>(
    `${import.meta.env.VITE_ENDPOINT}/vehicles/${id}/`
  );
  return data;
};

export const useVehicle = (url: string) => {
  const id = getIdFromUrl(url);
  return useQuery({
    queryKey: ["vehicle", id],
    queryFn: () => (id ? fetchVehicle(id) : null),
  });
};
