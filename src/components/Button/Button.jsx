import { Btn, BtnBox } from './Button.styled';

export const Button = ({ onLoadMore, isLoading }) => {
  return (
    <BtnBox>
      <Btn type="button" onClick={onLoadMore} disabled={isLoading}>
        Load more
      </Btn>
    </BtnBox>
  );
};
