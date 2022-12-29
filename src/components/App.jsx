import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { getImages } from 'utils/api';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class App extends Component {
  state = {
    imageName: '',
    page: 1,
    images: [],
    error: null,
    isLoading: false,
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName, page: 1, images: [] });
  };

  fetchImages = async (imageName, page) => {
    try {
      this.setState({
        isLoading: true,
      });
      const items = await getImages(imageName, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...items],
        isLoading: false,
      }));
      if (items.length === 0) {
        toast.error(
          "Sorry, we can't find anyting for your request. Please, enter another request"
        );
      }
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages(this.state.imageName, this.state.page);
    }
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        {isLoading && <Loader />}

        <ImageGallery images={images} />
        {images.length > 0 && (
          <Button onLoadMore={this.loadMore} isLoading={isLoading} />
        )}
      </>
    );
  }
}
