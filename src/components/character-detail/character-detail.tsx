import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ICharacter } from "../../types/types";
import Starship from "../starship";
import Vehicle from "../vehicle";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import { Detail, StyledForm, StyledLabel, VehicleContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { genderHash } from "../../hooks/constants";
import Planet from "../planet";

interface CharacterDetailProps {
  character: ICharacter;
  onSave: (data: ICharacter) => void;
}

const FORM_ID = "character-form";

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  character,
  onSave,
}) => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm<ICharacter>({
    defaultValues: character,
  });

  const height = watch("height");
  const mass = watch("mass");
  const hairColor = watch("hair_color");
  const eyeColor = watch("eye_color");
  const gender = watch("gender");

  const handleGoBack = () => {
    navigate("/");
  };
  const [isEditMode, setIsEditMode] = useState(false);

  const handleSetEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <Detail>
      <Button onClick={handleGoBack}>Go back</Button>
      <h1>{character.name}</h1>
      <StyledForm
        onSubmit={handleSubmit((character) => {
          onSave(character);
          setIsEditMode(false);
        })}
        id={FORM_ID}
      >
        <div>
          <StyledLabel>Height:</StyledLabel>
          {isEditMode ? (
            <Slider
              {...register("height")}
              value={Number(height)}
              min={0}
              max={300}
              size="medium"
              valueLabelDisplay="auto"
            />
          ) : (
            <span>{height}</span>
          )}
        </div>
        <div>
          <StyledLabel>Mass:</StyledLabel>
          {isEditMode ? (
            <Slider
              {...register("mass")}
              value={Number(mass)}
              min={0}
              size="medium"
              max={500}
              valueLabelDisplay="auto"
            />
          ) : (
            <span>{mass}</span>
          )}
        </div>
        <div>
          <StyledLabel>Hair color: </StyledLabel>
          {isEditMode ? (
            <TextField
              {...register("hair_color")}
              value={hairColor}
              size="small"
              variant="standard"
              sx={{
                input: {
                  fontFamily: "Chakra Petch",
                },
              }}
            />
          ) : (
            <span>{hairColor}</span>
          )}
        </div>
        <div>
          <StyledLabel>Eye color: </StyledLabel>
          {isEditMode ? (
            <TextField
              {...register("eye_color")}
              value={eyeColor}
              size="small"
              variant="standard"
              sx={{
                input: {
                  fontFamily: "Chakra Petch",
                },
              }}
            />
          ) : (
            <span>{eyeColor}</span>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {!isEditMode && <StyledLabel>Gender: </StyledLabel>}
          {isEditMode ? (
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                {...register("gender")}
                value={gender}
                label="Gender"
                style={{ textAlign: "center" }}
              >
                {Object.entries(genderHash).map(([key, value]) => (
                  <MenuItem key={key} value={key}>
                    {value + " " + key}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <span> {genderHash[gender as keyof typeof genderHash]}</span>
          )}
        </div>
        <div>
          <Planet url={character.homeworld} />
        </div>
      </StyledForm>

      {character.starships.length > 0 && (
        <div>
          <StyledLabel>Starships</StyledLabel>
          <Divider variant="fullWidth" />
          <VehicleContainer>
            {character.starships.map((url) => (
              <Starship key={url} url={url} />
            ))}
          </VehicleContainer>
        </div>
      )}
      {character.vehicles.length > 0 && (
        <div>
          <StyledLabel>Vehicles</StyledLabel>
          <Divider variant="fullWidth" />
          <VehicleContainer>
            {character.vehicles.map((url) => (
              <Vehicle key={url} url={url} />
            ))}
          </VehicleContainer>
        </div>
      )}
      <Button onClick={handleSetEditMode}>
        {isEditMode ? "Cancel" : "Edit"}
      </Button>
      {isEditMode && (
        <Button type="submit" form={FORM_ID}>
          Save
        </Button>
      )}
    </Detail>
  );
};

export default CharacterDetail;
