import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card>
      <CardBody borderRadius="10px">
        <Image
          src={game.background_image}
          overflow="hidden"
          borderRadius="10px"
        ></Image>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
