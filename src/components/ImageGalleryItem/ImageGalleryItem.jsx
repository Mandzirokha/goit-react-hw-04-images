import { useState } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import Modal from 'react-modal';
import { ImageModal } from 'components/Modal/ImageModal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

export const ImageGalleryItem = ({
  image: { webformatURL, tags, largeImageURL },
}) => {
  const [openedModal, setOpenedModal] = useState(false);

  const toggleModal = () => {
    setOpenedModal(openedModal => !openedModal);
  };

  return (
    <>
      <Item>
        <Image src={webformatURL} alt={tags} onClick={() => toggleModal()} />
      </Item>

      <Modal isOpen={openedModal} onRequestClose={toggleModal}>
        <ImageModal
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={toggleModal}
        />
      </Modal>
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
