import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>
      <Text m={2} whiteSpace={'nowrap'}>
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorMode;
