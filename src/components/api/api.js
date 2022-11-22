import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = async (search, page) => {
  const response = await axios.get(
    `/?q=${search}&page=${page}&key=30078668-25ca7b274b0e0bd0b8e169162&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits.map(({ id, webformatURL, largeImageURL }) => {
    return { id, webformatURL, largeImageURL };
  });
};
