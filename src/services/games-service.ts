import { QueryParam } from '../App';
import { IGameList } from '../interfaces/games.type';
import { IGenresList } from '../interfaces/genres.type';
import apiClient from './api-client';

class GamesService {
  getGames(currentQueryParam?: QueryParam) {
    return apiClient.get<IGameList>('/games', {
      params: {
        genres: currentQueryParam?.currentGenres?.id,
        platforms: currentQueryParam?.currentPlatform?.id,
        ordering: currentQueryParam?.currentSort?.value,
        search: currentQueryParam?.currentSearch,
      },
    });
  }

  getGenres() {
    return apiClient.get<IGenresList>('/genres');
  }
}

export default new GamesService();
