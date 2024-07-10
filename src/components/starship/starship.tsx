import { Skeleton } from "@mui/material";
import { useStarship } from "../../hooks/use-starship";
import VehicleCard from "../vehicle-card/vehicle-card";

interface StarshipProps {
  url: string;
}

const Starship = ({ url }: StarshipProps) => {
  const { data, isLoading, isError } = useStarship(url);

  if (isLoading) return <Skeleton variant="rounded" height={30} width={100} />;
  if (isError) return <div>Error loading vehicle</div>;
  return <VehicleCard icon={"🚀"} name={data?.name ?? ""} />;
};

export default Starship;
