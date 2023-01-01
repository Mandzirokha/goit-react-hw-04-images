import { Overlay, ModalBox } from './ImageModal.styled';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ImageModal = ({ onClose, largeImageURL, tags }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalBox>
        <img src={largeImageURL} alt={tags} />
      </ModalBox>
    </Overlay>
  );
};

ImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
