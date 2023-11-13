import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: "https://api.rawg.io/api",
        params: {
            key: "fd0a74b4b9f04e0192473901b43568ed"
        }
    }
)

export default apiClient