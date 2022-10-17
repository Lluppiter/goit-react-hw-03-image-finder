import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import styles from '../ImageGallery/ImageGallery.module.css'
import PropTypes from 'prop-types'

export const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        <ImageGalleryItem images={images} openModal={openModal} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired
}