import { usePlanet } from "../../hooks/use-planet";

interface StarshipProps {
  url: string;
}

const Planet = ({ url }: StarshipProps) => {
  const { data } = usePlanet(url);

  return <div>🌍 {data && data.name}</div>;
};

export default Planet;
