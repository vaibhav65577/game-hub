import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import GamesGrid from './components/GamesGrid';
import GenresList from './components/GenresList';
import { useState } from 'react';
import { IGenres } from './interfaces/genres.type';
import PlatformSelector from './components/PlatformSelector';
import { IPlatformList, ISort } from './interfaces/platform.type';
import { produce } from 'immer';
import SortSelector from './components/SortSelector';
import DynamicHeading from './components/DynamicHeading';

export interface QueryParam {
  currentGenres?: IGenres;
  currentPlatform?: IPlatformList;
  currentSort?: ISort;
  currentSearch?: string;
}

function App() {
  const [currentQueryParam, setQueryParam] = useState<QueryParam>({});

  const updateQueryParam = <K extends keyof QueryParam>(
    key: K,
    value: QueryParam[K],
  ) => {
    setQueryParam(
      produce((draft) => {
        draft[key] = value;
      }),
    );
  };

  const handleGenreSelect = (data: IGenres) => {
    updateQueryParam('currentGenres', data);
  };

  const handlePlatformSelect = (data: IPlatformList) => {
    updateQueryParam('currentPlatform', data);
  };

  const changeSortSelector = (data: ISort) => {
    updateQueryParam('currentSort', data);
  };

  const searchData = (data: string) => {
    updateQueryParam('currentSearch', data);
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(data) => searchData(data)} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenresList
              selectedGenres={handleGenreSelect}
              currentSelectedGenres={currentQueryParam?.currentGenres}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <DynamicHeading queryParam={currentQueryParam} />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectPlatform={(data) => handlePlatformSelect(data)}
                  currentPlatform={currentQueryParam?.currentPlatform}
                />
              </Box>
              <SortSelector
                selectSort={(data) => changeSortSelector(data)}
                currentSort={currentQueryParam?.currentSort}
              ></SortSelector>
            </Flex>
          </Box>
          <GamesGrid currentQueryParam={currentQueryParam} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
