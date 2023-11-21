import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  setSearchInput: (text: string | null) => void;
}

const SearchInput = ({ setSearchInput }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        setSearchInput(inputRef.current ? inputRef.current.value : null);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          borderRadius="9999px"
          variant="filled"
          placeholder="Search Games..."
          ref={inputRef}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
