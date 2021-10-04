import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({ webformatURL, tags, openModal }) {
  return (
    <li onClick={openModal} className={s.ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} width="640"/>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};