import React, { useState, useEffect, useMemo } from "react";
import { CharacterCard } from "../../components";
import { useCharacters } from "../../hooks/use-characters";
import { ICharacter } from "../../types/types";
import { useForm } from "react-hook-form";
import { debounce } from "lodash";
import { Container, ListContainer } from "./styles";
import {
  Pagination,
  Skeleton,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const SKELETON_COUNT = 10;
const skeletonKeys = Array.from(Array(SKELETON_COUNT).keys());

const CharacterList: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const { register, watch } = useForm();

  const { data, isLoading, isError } = useCharacters(page, searchTerm);

  const handleSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchTerm(value);
        setPage(1);
      }, 500),
    []
  );

  const searchValue = watch("search");

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue, handleSearch]);

  if (isError) return <div>Error loading characters</div>;

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Container>
      <TextField
        type="text"
        placeholder="🔍 Search..."
        {...register("search")}
        sx={{
          input: {
            fontFamily: "Chakra Petch",
          },
        }}
      />
      {!isLoading ? (
        <>
          {data && data.results.length > 0 ? (
            <>
              <ListContainer>
                {data.results.map((character: ICharacter) => (
                  <CharacterCard key={character.name} character={character} />
                ))}
              </ListContainer>
              <Pagination
                count={data ? Math.ceil(data.count / 10) : 0}
                page={page}
                onChange={handlePageChange}
                color="primary"
                siblingCount={isMobile ? 0 : 1}
                boundaryCount={isMobile ? 1 : 2}
              />
            </>
          ) : (
            <h3>No characters found.🙁 Try again!</h3>
          )}
        </>
      ) : (
        <ListContainer>
          {skeletonKeys.map((key) => (
            <Skeleton key={key} variant="rounded" height={242} width={192} />
          ))}
        </ListContainer>
      )}
    </Container>
  );
};

export default CharacterList;
