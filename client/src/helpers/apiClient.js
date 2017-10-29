import axios from 'axios';
const apiUrl = process.env.API_URI || 'http://localhost:4000';

const apiClient = {
    getQuestions: () => {
        return axios.get(`${apiUrl}/api/questions`);
    },
    getPlaces: () => {
        return axios.get(`${apiUrl}/api/places`);
    }
}

export default apiClient;