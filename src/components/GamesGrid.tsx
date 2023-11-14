import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

useGames;

const GamesGrid = () => {
  const { games, error } = useGames();

  console.log(games[0]);
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="10px">
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};

export default GamesGrid;
