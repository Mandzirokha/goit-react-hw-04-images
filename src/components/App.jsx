import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';
import { getImages } from 'utils/api';

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
        alert(
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

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imageName !== this.state.imageName ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages(this.state.imageName, this.state.page);
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
