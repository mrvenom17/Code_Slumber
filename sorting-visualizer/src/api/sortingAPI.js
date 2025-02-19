import axios from "axios";

const API_BASE_URL = "http://localhost:8080/sort";

export const sortArray = async (algorithm, array) => {
    const response = await axios.post(API_BASE_URL, { algorithm, array });
    return response.data;
};
