import { FallingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <FallingLines
        color="#3f51b5"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LoaderWrap>
  );
};
