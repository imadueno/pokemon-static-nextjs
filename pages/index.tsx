import type { NextPage, GetStaticProps } from "next";
import { Layout } from "@layouts";
import { pokeApi } from "../api";
import { PokemonListResponse, SmallPokemon } from "../interfaces/pokemon-list";
import { PokemonListGrid } from "components/pokemon/";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokémons">
        <PokemonListGrid pokemons={pokemons} />
      </Layout>
    </>
  );
};

/**
 * PRE-Generamos un array de pokemons. Esto sucede en build-time
 * como siempre serán 151 pokemons, los "cacheamos"
 * Estas "StaticProps" serán recibidas en nuestro componente HomePage
 *
 * @return un objeto con el key "props" que a su vez es otro objeto
 * que retorna los props que recibirá el componente
 */
export const getStaticProps: GetStaticProps = async (ctx) => {
  // se ve en la consola, no en el browser, no llega al cliente
  // console.log("hola mundo");

  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => {
    return {
      ...poke,
      id: i + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
