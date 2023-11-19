import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GetCropedImageURL from "../services/image-url";

const GenresList = () => {
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
            <Text fontSize="1xl">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
