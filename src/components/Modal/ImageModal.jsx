import { Overlay, ModalBox } from './ImageModal.style';

export const ImageModal = ({ largeImageURL, tags, isOpen, onClose }) => {
  return (
    <Overlay>
      <ModalBox>
        <img src={largeImageURL} alt={tags} />
        <div>Modal</div>
      </ModalBox>
    </Overlay>
  );
};
