import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

useGames;

const GamesGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];

  console.log(games[0]);
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="10px">
      {error && <p>error</p>}
      {isLoading &&
        skeleton.map((item) => (
          <GameCardSkeleton key={item}></GameCardSkeleton>
        ))}
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
