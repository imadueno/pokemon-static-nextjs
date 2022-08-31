import React from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Layout } from "@layouts";
import { Pokemon } from "interfaces";
import pokeApi from "../../api/pokeApi";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout>
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height="200px"
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card css={{ padding: "0px 30px" }}>
            <Card.Header
              css={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button color={"gradient"} ghost>
                Guardar en favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.back_default}
                  alt={"back default"}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_default}
                  alt={"back default"}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={"back default"}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={"back default"}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

/**
 * Debes usar getStaticPaths si estas pre-renderizando estaticamente paginas que
 * usan rutas dinamicas
 *
 * 1. es una ruta dinamica ✅
 * 2. se quiere pre-renderizar estaticamente
 *
 * snipet nextStaticPaths
 *
 * @return
 */
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // array de 151 posiciones de strings
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    // debido a que el page es dinamico [id], se debe establecer
    // qué se va a PRE-generar cómo static page en el build time
    // cada elemento del array path representa un page creado
    // en pocas palabras getStaticPaths, PRE-Genera pages estaticas
    // paths: [
    //   { params: { id: "1" } },
    //   { params: { id: "2" } },
    //   { params: { id: "3" } },
    //   { params: { id: "4" } },
    // ],
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

/**
 * Pre-generamos las props del page en tiempo de build
 * @param ctx contexto, aquí tendremos los params que necesitamos de getStatichPaths
 */
export const getStaticProps: GetStaticProps = async ({ params }) => {
  // extraemos el id del param, y generamos un tipado en línea
  const { id } = params as { id: string };
  // fetch del pokemon en cuestion
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
