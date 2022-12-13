import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image: { webformatURL, tags } }) => {
  return (
    <Item>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};
