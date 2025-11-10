import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponses {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponses>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
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
