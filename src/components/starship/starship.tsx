import { useStarship } from "../../hooks/use-starship";
import VehicleCard from "../vehicle-card/vehicle-card";

interface StarshipProps {
  url: string;
}

const Starship = ({ url }: StarshipProps) => {
  const { data, isLoading, isError } = useStarship(url);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading vehicle</div>;
  return <VehicleCard icon={"🚀"} name={data?.name ?? ""} />;
};

export default Starship;
