import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';

interface SearchBarProps {
  onSearch: (data: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const searchBarRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        style={{ width: '100%' }}
        onSubmit={(event) => {
          event.preventDefault();
          if (searchBarRef.current) onSearch(searchBarRef.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={searchBarRef}
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          />
          <InputRightElement
            children={
              <MdOutlineCancel
                cursor="pointer"
                onClick={() => {
                  onSearch('');
                  if (searchBarRef.current) searchBarRef.current.value = '';
                }}
              />
            }
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchBar;
