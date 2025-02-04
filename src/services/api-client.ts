import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '44822dad9b404d75902cf644ddceae74',
  },
});
