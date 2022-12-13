import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import axios from 'axios';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    try {
      const response =
        await axios.get(`https://pixabay.com/api/?q=cat&page=1&key=23552820-93d67742e09e03fef5d4385d1&image_type=photo&orientation=horizontal&per_page=12
`);
      console.log(response);
      this.setState({ images: response.data.hits });
    } catch (error) {}
  }

  render() {
    const { images } = this.state;
    return (
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.id} />
        ))}
      </Gallery>
    );
  }
}
