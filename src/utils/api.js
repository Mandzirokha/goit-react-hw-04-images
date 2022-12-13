import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['x-api-key'] =
  '23552820-93d67742e09e03fef5d4385d1';
// axios.defaults.apiKey = '23552820-93d67742e09e03fef5d4385d1';
// axios.defaults.params = {
//   key: '23552820-93d67742e09e03fef5d4385d1',
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

export const getImages = async () => {
  const response = await axios.get('/images');

  return response.data;
};
