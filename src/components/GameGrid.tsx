import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <div>Error: {error}</div>}
      <SimpleGrid columns={{sm:1, md:2, lg:4}} padding={5} spacing={10}>
        {
          games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))
        }
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
