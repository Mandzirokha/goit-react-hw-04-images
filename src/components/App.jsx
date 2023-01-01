import { useState, useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { getImages } from 'utils/api';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ERROR_MESSAGE = 'We were unable to get data, please try again 😇';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (imageName) {
      fetchImages(imageName, page);
    }
  }, [imageName, page]);

  const fetchImages = async (imageName, page) => {
    try {
      setIsLoading(true);
      const items = await getImages(imageName, page);

      setImages(prevState => [...prevState, ...items]);
      setIsLoading(false);
      if (items.length === 0) {
        toast.error(
          "Sorry, we can't find anyting for your request. Please, enter another request"
        );
      }
    } catch (error) {
      setError(ERROR_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ToastContainer autoClose={3000} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && (
        <Button onLoadMore={loadMore} isLoading={isLoading} />
      )}
    </>
  );
}
