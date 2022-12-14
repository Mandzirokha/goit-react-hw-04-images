import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  // state = {
  //   // images: [],
  //   isLoading: false,
  // };

  render() {
    const { images } = this.props;
    return (
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.webformatURL} />
        ))}
      </Gallery>
    );
  }
}
