import { useEffect, useState } from 'react';
import { IGame } from '../interfaces/games.type';
import gamesService from '../services/games-service';
import { QueryParam } from '../App';

const useGames = (
  currentQueryParam?: QueryParam,
  dependencies: unknown[] = [],
) => {
  const [gamesList, setGamesList] = useState<IGame[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    gamesService.getGames(currentQueryParam).then((res) => {
      setGamesList(res.data.results);
      setLoading(false);
    });
  }, dependencies);

  return { gamesList, isLoading };
};

export default useGames;
