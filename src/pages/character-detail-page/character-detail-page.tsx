import React from "react";
import { useParams } from "react-router-dom";
import { CharacterDetail } from "../../components";
import { useCharacterDetail } from "../../hooks/use-character-detail";
import useCharacterFromStore from "../../hooks/use-character-from-store";
import { Container } from "./styles";
import { Skeleton } from "@mui/material";

const CharacterDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useCharacterDetail(id as string);
  const [characterFromStore, setCharacterToStore] = useCharacterFromStore(
    id as string
  );

  if (isError) return <div>Error loading character</div>;

  const character = characterFromStore || data;

  return (
    <Container>
      {!character || isLoading ? (
        <Skeleton variant="rounded" height={500} width={330} />
      ) : (
        <CharacterDetail character={character} onSave={setCharacterToStore} />
      )}
    </Container>
  );
};

export default CharacterDetailPage;
