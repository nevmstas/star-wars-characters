import React from "react";
import { ICharacter } from "../../types/types";
import { getIdFromUrl } from "../../utils/getIdFromUrl";
import Planet from "../planet";
import { Card, Header, Info, StyledLink } from "./styles";
import { genderHash } from "../../hooks/constants";

interface CharacterCardProps {
  character: ICharacter;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => (
  <StyledLink to={`/characters/${getIdFromUrl(character.url)}`}>
    <Card>
      <Header>
        <h3>{character.name}</h3>
      </Header>
      <Info>
        <div>
          <span>
            <b>Height: </b> {character.height}
          </span>
        </div>
        <div>
          <span>
            <b>Gender:</b>
            {genderHash[character.gender as keyof typeof genderHash]}
          </span>
        </div>
        <div>
          <span>
            <b>Birth Year</b>: {character.birth_year}
          </span>
        </div>
        <div>
          <Planet url={character.homeworld} />
        </div>
      </Info>
    </Card>
  </StyledLink>
);

export default CharacterCard;
