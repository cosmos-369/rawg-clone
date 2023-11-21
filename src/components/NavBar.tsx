import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  setSearchInput: (text: string | null) => void;
}

const NavBar = ({ setSearchInput }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Text whiteSpace="nowrap">L O G O</Text>
      <SearchInput setSearchInput={setSearchInput}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
