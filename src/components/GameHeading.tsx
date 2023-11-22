import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platfrom = gameQuery.platfrom?.name || "";
  const genre = gameQuery.genre?.name || "";
  return (
    <Heading as="h1" fontSize="5xl">
      {[platfrom, genre, "Games"].join(" ")}
    </Heading>
  );
};

export default GameHeading;
