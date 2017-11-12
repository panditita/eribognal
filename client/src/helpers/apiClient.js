import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URI || 'http://localhost:4000';

const apiClient = {
    getQuestions: () => {
        return axios.get(`${apiUrl}/api/questions`);
    },
    getPlaces: () => {
        return axios.get(`${apiUrl}/api/places`);
    },
    suggestPlaces: (places) => {        
        return axios.post(`${apiUrl}/api/places`,  {
           name: places.name,
           description: places.description
          });
    }
}

export default apiClient;