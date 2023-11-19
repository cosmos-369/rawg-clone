import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GetCropedImageURL from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="10px">
          <HStack>
            <Image
              boxSize="40px"
              borderRadius="5px"
              src={GetCropedImageURL(g.image_background)}
            ></Image>
            <Button
              onClick={() => onSelectGenre(g)}
              variant="link"
              fontSize="1xl"
              fontWeight={selectedGenre?.id === g.id ? "bold" : "normal"}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
