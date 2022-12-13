import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';

export default class App extends Component {
  state = {
    imageName: '',
  };

  render() {
    return (
      <div>
        <SearchBar />
        <ImageGallery />
      </div>
    );
  }
}
