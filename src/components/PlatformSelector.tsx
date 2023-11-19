import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface Props {
  onPlatfromSelect: (platform: Platform) => void;
  selectedPlatfrom: Platform | null;
}

const PlatformSelector = ({ onPlatfromSelect, selectedPlatfrom }: Props) => {
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <Menu>
      <MenuButton marginY="10px" as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatfrom ? selectedPlatfrom.name : "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem key={item.id} onClick={() => onPlatfromSelect(item)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
