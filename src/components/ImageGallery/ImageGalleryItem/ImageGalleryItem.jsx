import { Component } from 'react';
import styles from '../ImageGalleryItem/ImageGalleryItem.module.css'
import PropTypes from 'prop-types'

export class ImageGalleryItem extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired
  }
  render() {
    return this.props.images.map(({ id, webformatURL, tags, largeImageURL}) => (
      <li className={styles.ImageGalleryItem} key={id} onClick={()=>this.props.openModal({url: largeImageURL, tags})} >
        <img className={styles.ImageGalleryItemImage} src={webformatURL} alt={tags} />
      </li>
    ));
  }
};