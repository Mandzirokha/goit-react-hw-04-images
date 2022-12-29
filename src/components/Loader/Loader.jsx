import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <FallingLines
        color="#3f51b5"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};
