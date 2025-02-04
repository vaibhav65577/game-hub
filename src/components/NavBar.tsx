import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import ColorMode from './ColorMode';
import SearchBar from './SearchBar';

interface SearchBarProps {
  onSearch: (data: string) => void;
}

const NavBar = ({ onSearch }: SearchBarProps) => {
  return (
    <>
      <HStack justifyContent={'space-between'}>
        <Image m={2} src={logo} boxSize={45}></Image>
        <SearchBar onSearch={(data) => onSearch(data)}></SearchBar>
        <ColorMode></ColorMode>
      </HStack>
    </>
  );
};

export default NavBar;
