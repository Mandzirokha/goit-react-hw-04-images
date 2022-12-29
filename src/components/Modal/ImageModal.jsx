import { Overlay, ModalBox } from './ImageModal.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageModal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBox>
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </ModalBox>
      </Overlay>
    );
  }
}
