import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformsList from "./PlatformsList";

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
        <PlatformsList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        ></PlatformsList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
