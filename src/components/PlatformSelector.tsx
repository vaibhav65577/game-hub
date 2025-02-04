import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from '../hooks/usePlatform';
import { IPlatformList } from '../interfaces/platform.type';
interface PlatformSelectorProps {
  selectPlatform: (data: IPlatformList) => void;
  currentPlatform?: IPlatformList;
}

const PlatformSelector = ({
  selectPlatform,
  currentPlatform,
}: PlatformSelectorProps) => {
  const { data } = usePlatform();
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {currentPlatform?.name || 'Platform'}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              onClick={() => selectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelector;
