import {
  Button,
  HStack,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { IGenres } from '../interfaces/genres.type';

interface GenresListProps {
  selectedGenres: (data: IGenres) => void;
  currentSelectedGenres?: IGenres;
}

const GenresList = ({
  selectedGenres,
  currentSelectedGenres,
}: GenresListProps) => {
  const { genresList, showLoading } = useGenres();

  const clickGenres = (data: IGenres) => {
    selectedGenres(data);
  };
  return (
    <>
      {showLoading ? (
        <>
          {Array.from({ length: 15 }, (_, i) => i + 1).map((data) => (
            <HStack margin={'5px'} key={data}>
              <SkeletonCircle size="10" />
              <SkeletonText width={'100px'} margin={'3'} noOfLines={1} />
            </HStack>
          ))}
        </>
      ) : (
        <>
          {genresList?.results.map((data, index) => (
            <HStack key={index}>
              <>
                <Image
                  boxSize={'32px'}
                  borderRadius="20"
                  src={getCroppedImageUrl(data.image_background)}
                  margin={'5px'}
                ></Image>
                <Button
                  type="button"
                  variant={'link'}
                  style={{
                    whiteSpace: 'normal',
                    wordWrap: 'break-word',
                    textAlign: 'left',
                  }}
                  className="tex-wrap"
                  fontSize="lg"
                  onClick={() => clickGenres(data)}
                >
                  <Text
                    fontWeight={
                      data.id === currentSelectedGenres?.id ? 'bold' : 'normal'
                    }
                  >
                    {data.name}
                  </Text>
                </Button>
              </>
            </HStack>
          ))}
        </>
      )}
    </>
  );
};

export default GenresList;
