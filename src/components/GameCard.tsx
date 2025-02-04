import { IGame } from '../interfaces/games.type';
import { Image, CardBody, Heading, HStack } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import BadgeScore from './BadgeScore';
import getCroppedImageUrl from '../services/image-url';
import GameCardContainer from './GameCardContainer';

interface GameCardProps {
  game: IGame;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      <GameCardContainer>
        <Image
          height={40}
          src={getCroppedImageUrl(game.background_image)}
        ></Image>
        <CardBody>
          <HStack justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms} />
            <BadgeScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
      </GameCardContainer>
    </>
  );
};

export default GameCard;
