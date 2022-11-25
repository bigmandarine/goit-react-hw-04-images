import { useEffect } from 'react';
import { BackDrop, ModalWindow, Img } from './Modal.styled';
import PropTypes from 'prop-types';
export default function Modal({ onClick, image }) {
  useEffect(() => {
    window.addEventListener('keydown', onClickEsc);
    return () => {
      window.removeEventListener('keydown', onClickEsc);
    };
  });

  const onClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };
  const onClickEsc = e => {
    if (e.code === 'Escape') {
      return onClick();
    }
  };

  return (
    <BackDrop onClick={onClickBackdrop}>
      <ModalWindow>
        <Img src={image} alt="" />
      </ModalWindow>
    </BackDrop>
  );
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
