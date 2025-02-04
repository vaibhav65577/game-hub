import { Heading } from '@chakra-ui/react';
import { QueryParam } from '../App';

interface DynamicHeaderProps {
  queryParam: QueryParam;
}

const DynamicHeading = ({ queryParam }: DynamicHeaderProps) => {
  return (
    <Heading paddingY={'10px'}>
      {queryParam.currentGenres?.name} {queryParam.currentPlatform?.name} Games
    </Heading>
  );
};

export default DynamicHeading;
