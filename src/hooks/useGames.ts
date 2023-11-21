import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id   : number;
  name : string;
  slug : string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms : {platform : Platform}[];
    metacritic : number;
}

interface Props {
  gameQuery : GameQuery
}

const useGames = ({gameQuery} : Props) => {
  return useData<Game>("/games", {
    params: {genres : gameQuery.genre?.id,
       parent_platforms: gameQuery.platfrom?.id,
       ordering: gameQuery?.ordering,
       search: gameQuery?.search}
  }, [gameQuery])
}

export default useGames