import PropTypes from 'prop-types';
import { ButtonWrapper } from './ButtonLoad.styled';
export const ButtonLoadMore = ({ onClick }) => {
  return (
    <ButtonWrapper>
      <button type="submit" onClick={onClick}>
        Load more
      </button>
    </ButtonWrapper>
  );
};

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
