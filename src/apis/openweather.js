import axios from 'axios';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    appid: API_KEY,
  },
});
