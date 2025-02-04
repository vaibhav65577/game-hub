import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { ISort } from '../interfaces/platform.type';

interface SortSelectorProps {
  selectSort: (data: ISort) => void;
  currentSort?: ISort;
}

const SortSelector = ({ selectSort, currentSort }: SortSelectorProps) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sort Selector : {currentSort?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
          {sortOrders.map((data) => (
            <MenuItem key={data.value} onClick={() => selectSort(data)}>
              {data.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
