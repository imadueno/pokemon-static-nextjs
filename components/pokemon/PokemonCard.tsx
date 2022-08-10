import { FC } from "react";
import { useRouter } from "next/router";
import { Card, Row, Text, Grid } from "@nextui-org/react";
import { SmallPokemon } from "interfaces";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name, img } = pokemon;
  const router = useRouter();

  const handleClick = () => {
    router.push(`pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={4} md={3} xl={2}>
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text># {id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
