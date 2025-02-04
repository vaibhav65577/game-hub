import { useEffect, useState } from 'react';
import gamesService from '../services/games-service';
import { IGenresList } from '../interfaces/genres.type';

const useGenres = () => {
  const [genresList, setGenres] = useState<IGenresList>();
  const [showLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    gamesService.getGenres().then((res) => {
      setGenres(res.data);
      setLoading(false);
    });
  }, []);
  return { genresList, showLoading };
};

export default useGenres;
