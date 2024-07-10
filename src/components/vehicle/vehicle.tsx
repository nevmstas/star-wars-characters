import { useVehicle } from "../../hooks/use-vehicle";
import VehicleCard from "../vehicle-card/vehicle-card";

interface VehicleProps {
  url: string;
}

const Vehicle = ({ url }: VehicleProps) => {
  const { data, isLoading, isError } = useVehicle(url);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading vehicle</div>;
  return <VehicleCard name={data?.name ?? ''} icon={"🏍"}/>;
};

export default Vehicle;
