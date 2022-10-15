export const ImageGalleryItem = ({ images }) => {
  return images.map(image => (
    <li className="gallery-item" key={image.id}>
      <img src={image.largeImageURL} alt={image.tags} />
    </li>
  ));
};
