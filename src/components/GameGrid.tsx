import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <div>Error: {error}</div>}
      <div>
        {games.map((game) => (
          <div key={game.id}>
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default GameGrid;
