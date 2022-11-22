import { Component } from 'react';
import { BackDrop, ModalWindow, Img } from './Modal.styled';
import PropTypes from 'prop-types';
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onClickEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onClickEsc);
  }
  onClickEsc = e => {
    if (e.code === 'Escape') {
      return this.props.onClick();
    }
  };
  onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };
  render() {
    return (
      <BackDrop onClick={this.onClickBackdrop}>
        <ModalWindow>
          <Img src={this.props.image} alt="" />
        </ModalWindow>
      </BackDrop>
    );
  }
}

export default Modal;
Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
