import { Skeleton } from '@chakra-ui/react';
import { CardBody, SkeletonText } from '@chakra-ui/react';
import GameCardContainer from './GameCardContainer';

const GameCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 15 }, (_, i) => i + 1).map((data) => (
        <GameCardContainer key={data}>
          <Skeleton height="200px" />
          <CardBody>
            <SkeletonText />
          </CardBody>
        </GameCardContainer>
      ))}
    </>
  );
};

export default GameCardSkeleton;
