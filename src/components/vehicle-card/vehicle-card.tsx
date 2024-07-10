import { VehicleInfoCard } from "./styles";

interface VehicleCardProps {
  icon: string;
  name: string;
}

const VehicleCard = ({ icon, name }: VehicleCardProps) => {
  return (
    <VehicleInfoCard>
      {icon} <b>{name}</b>
    </VehicleInfoCard>
  );
};

export default VehicleCard;
