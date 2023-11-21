import "./App.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platfrom: Platform | null;
  ordering: string | null;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            setSearchInput={(text) =>
              setGameQuery({ ...gameQuery, search: text })
            }
          ></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem paddingX="10px" area="aside">
            <GenresList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre: genre })
              }
            ></GenresList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing="10px">
            <PlatformSelector
              selectedPlatfrom={gameQuery.platfrom}
              onPlatfromSelect={(platform) =>
                setGameQuery({ ...gameQuery, platfrom: platform })
              }
            ></PlatformSelector>

            <SortSelector
              selectedOrdering={gameQuery.ordering}
              setSelectedOrdering={(key) =>
                setGameQuery({ ...gameQuery, ordering: key })
              }
            ></SortSelector>
          </HStack>
          <GamesGrid gameQuery={gameQuery}></GamesGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
