import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformsList from "./PlatformsList";
import CriticScore from "./CriticScore";
import GetCropedImageURL from "../services/image-url";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card>
      <CardBody display="flex" flexDir="column">
        <Image
          src={GetCropedImageURL(game.background_image)}
          overflow="hidden"
          borderRadius="10px"
        ></Image>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformsList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          ></PlatformsList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
