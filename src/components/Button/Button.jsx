import { Btn, BtnBox } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore, isLoading }) => {
  return (
    <BtnBox>
      <Btn type="button" onClick={onLoadMore} disabled={isLoading}>
        Load more
      </Btn>
    </BtnBox>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
