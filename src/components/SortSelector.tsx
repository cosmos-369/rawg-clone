import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedOrdering: string | null;
  setSelectedOrdering: (ordering: string) => void;
}

const SortSelector = ({ selectedOrdering, setSelectedOrdering }: Props) => {
  const sortingOptions = [
    { key: "name", value: "Name" },
    { key: "-released", value: "Released" },
    { key: "-added", value: "Added" },
    { key: "created", value: "Created" },
    { key: "updated", value: "Updated" },
    { key: "-rating", value: "Rating" },
    { key: "-metacritic", value: "Metacritic" },
  ];

  const currentSelectedOrdering = sortingOptions.find(
    (item) => item.key === selectedOrdering
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by: {currentSelectedOrdering?.value || "Relavence"}
      </MenuButton>
      <MenuList>
        {sortingOptions.map((item) => (
          <MenuItem
            key={item.key}
            onClick={() => setSelectedOrdering(item.key)}
          >
            {item.value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
