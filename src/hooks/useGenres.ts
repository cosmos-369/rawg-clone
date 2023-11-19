import { useState } from "react";
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    slug : string;
    image_background : string;
}

useState
const useGenres = () => {
  return useData<Genre>("/genres")
}

export default useGenres