import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterDetail from "./character-detail";
import { ICharacter } from "../../types/types";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const character: ICharacter = {
  name: "Luke Skywalker",
  height: "172",
  mass: "77",
  hair_color: "blond",
  eye_color: "blue",
  gender: "male",
  homeworld: "https://swapi.dev/api/planets/1/",
  starships: ["https://swapi.dev/api/starships/12/"],
  vehicles: ["https://swapi.dev/api/vehicles/14/"],
  url: "",
  birth_year: "",
};

const onSave = vi.fn();

describe("CharacterDetail", () => {
  it("renders character details correctly", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <CharacterDetail character={character} onSave={onSave} />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByText("Luke Skywalker")).toBeInTheDocument();
    expect(screen.getByText("Height:")).toBeInTheDocument();
    expect(screen.getByText("172")).toBeInTheDocument();
    expect(screen.getByText("Mass:")).toBeInTheDocument();
    expect(screen.getByText("77")).toBeInTheDocument();
    expect(screen.getByText("Hair color:")).toBeInTheDocument();
    expect(screen.getByText("blond")).toBeInTheDocument();
    expect(screen.getByText("Eye color:")).toBeInTheDocument();
    expect(screen.getByText("blue")).toBeInTheDocument();
    expect(screen.getByText("Gender:")).toBeInTheDocument();
  });

  it("toggles edit mode", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <CharacterDetail character={character} onSave={onSave} />
        </MemoryRouter>
      </QueryClientProvider>
    );

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);
    expect(screen.getByText("Cancel")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancel"));
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
});
