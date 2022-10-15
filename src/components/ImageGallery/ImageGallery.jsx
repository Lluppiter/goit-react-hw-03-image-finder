import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="gallery">
        <ImageGalleryItem images={images} />
      </ul>
    </>
  );
};
