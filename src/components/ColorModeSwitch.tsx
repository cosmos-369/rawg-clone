import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      {colorMode === "dark" ? <Text>Dark</Text> : <Text>Light</Text>}
    </HStack>
  );
};

export default ColorModeSwitch;
