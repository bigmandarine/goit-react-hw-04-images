import PropTypes from 'prop-types';
import { Item } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ largeImageURL, webformatURL, onClick }) => {
  return (
    <Item onClick={() => onClick(largeImageURL)}>
      <img src={webformatURL} alt=""></img>
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
