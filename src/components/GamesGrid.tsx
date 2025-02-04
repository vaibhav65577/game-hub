import { SimpleGrid } from '@chakra-ui/react';
import { useMemo } from 'react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { QueryParam } from '../App';

interface GamesGridProps {
  currentQueryParam?: QueryParam;
}

const GamesGrid = ({ currentQueryParam }: GamesGridProps) => {
  const dependencies = useMemo(() => [currentQueryParam], [currentQueryParam]);
  const { gamesList, isLoading } = useGames(currentQueryParam, dependencies);
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={3}
      >
        {isLoading ? (
          <GameCardSkeleton></GameCardSkeleton>
        ) : (
          gamesList.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))
        )}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
