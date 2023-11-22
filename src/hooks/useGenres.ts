import data from "../assets/data/genres"

export interface Genre {
    id: number;
    name: string;
    slug : string;
    image_background : string;
}


const useGenres = () => {
  return {data : data, error : null, isLoading : false};
}


export default useGenres