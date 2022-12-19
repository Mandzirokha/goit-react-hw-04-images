import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import Modal from 'react-modal';
import { ImageModal } from 'components/Modal/ImageModal';

Modal.setAppElement('#root');

// export const ImageGalleryItem = ({
//   image: { webformatURL, tags, largeImageURL },
// }) => {
//   return (
//     <>
//       <Item>
//         <Image src={webformatURL} alt={tags} />
//       </Item>

//       <Modal>
//         <ImageModal largeImageURL={largeImageURL} tags={tags} />
//       </Modal>
//     </>
//   );
// };

export class ImageGalleryItem extends Component {
  state = {
    openedModal: null,
  };

  openModal = type => {
    this.setState({ openedModal: type });
  };

  closeModal = () => {
    this.setState({ openedModal: null });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props.image;
    return (
      <>
        <Item>
          <Image
            src={webformatURL}
            alt={tags}
            onClick={() => this.openModal('image')}
          />
        </Item>

        <Modal>
          <ImageModal largeImageURL={largeImageURL} tags={tags} />
        </Modal>
      </>
    );
  }
}
