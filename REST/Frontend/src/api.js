// frontend/src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

export const getWeatherByCity = (city) => {
  const encodedCity = encodeURIComponent(city);
  return api.get(`/weather/${encodedCity}`);
};
