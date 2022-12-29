import { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import Modal from 'react-modal';
import { ImageModal } from 'components/Modal/ImageModal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    openedModal: false,
  };

  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  };

  toggleModal = () => {
    this.setState(({ openedModal }) => ({
      openedModal: !openedModal,
    }));
  };

  render() {
    const { openedModal } = this.state;
    const {
      image: { webformatURL, tags, largeImageURL },
    } = this.props;
    return (
      <>
        <Item>
          <Image
            src={webformatURL}
            alt={tags}
            onClick={() => this.toggleModal()}
          />
        </Item>

        <Modal isOpen={openedModal}>
          <ImageModal
            largeImageURL={largeImageURL}
            tags={tags}
            onClose={this.toggleModal}
          />
        </Modal>
      </>
    );
  }
}
