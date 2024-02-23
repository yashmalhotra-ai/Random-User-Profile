import axios from "axios";
import { RANDOM_API } from "../Constant";

// API Call for random user
const getRandomUser = async () => {
    try {
        const res = await axios.get(RANDOM_API);
        return res?.data?.results[0];
    } catch (error) {
        console.log("ERROR API", error)
        throw error;
    }
}

export default getRandomUser;