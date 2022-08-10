import { FC } from "react";
import { useRouter } from "next/router";

import { Grid } from "@nextui-org/react";
import { SmallPokemon } from "interfaces";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SmallPokemon[];
}

export const PokemonListGrid: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid.Container>
  );
};
