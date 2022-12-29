import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  };
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
