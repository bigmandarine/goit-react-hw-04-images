import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ gallery, onClick }) => {
  return (
    <>
      <List>
        {gallery.map(({ id, largeImageURL, webformatURL }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            largeImageURL={largeImageURL}
            webformatURL={webformatURL}
            onClick={onClick}
          />
        ))}
      </List>
    </>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
