import { Badge } from '@chakra-ui/react';

interface BadgeScoreProp {
  score: number;
}
const BadgeScore = ({ score }: BadgeScoreProp) => {
  return (
    <Badge fontSize={14} colorScheme={score > 70 ? 'green' : 'red'}>
      {score}
    </Badge>
  );
};

export default BadgeScore;
