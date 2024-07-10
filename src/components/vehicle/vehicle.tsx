import { Skeleton } from "@mui/material";
import { useVehicle } from "../../hooks/use-vehicle";
import VehicleCard from "../vehicle-card/vehicle-card";

interface VehicleProps {
  url: string;
}

const Vehicle = ({ url }: VehicleProps) => {
  const { data, isLoading, isError } = useVehicle(url);

  if (isLoading) return <Skeleton variant="rounded" height={30} width={100} />;
  if (isError) return <div>Error loading vehicle</div>;
  return <VehicleCard name={data?.name ?? ''} icon={"🏍"}/>;
};

export default Vehicle;
