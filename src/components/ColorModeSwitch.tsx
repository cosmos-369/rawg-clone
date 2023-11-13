import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      {colorMode === "dark" ? <Text>dark</Text> : <Text>light</Text>}
    </HStack>
  );
};

export default ColorModeSwitch;
