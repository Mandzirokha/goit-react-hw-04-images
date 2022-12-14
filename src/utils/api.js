import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '23552820-93d67742e09e03fef5d4385d1';
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}`);

  return response.data.hits;
};
