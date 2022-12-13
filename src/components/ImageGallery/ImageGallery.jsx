import { Component } from 'react';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import axios from 'axios';

export class ImageGallery extends Component {
  state = {
    image: [],
  };

  async componentDidMount() {
    try {
      const response =
        await axios.get(`https://pixabay.com/api/?q=cat&page=1&key=23552820-93d67742e09e03fef5d4385d1&image_type=photo&orientation=horizontal&per_page=12
`);
      console.log(response);
      // this.setState({ image });
    } catch (error) {}
  }

  render() {
    return (
      <Gallery>
        <div>ImageGallery</div>
        {/* <ImageGalleryItem /> */}
      </Gallery>
    );
  }
}
