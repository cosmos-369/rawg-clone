import { useState } from "react";
import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug : string;
}

useState
const usePlatform = () => {
  return useData<Platform>("/platforms/lists/parents")
}

export default usePlatform