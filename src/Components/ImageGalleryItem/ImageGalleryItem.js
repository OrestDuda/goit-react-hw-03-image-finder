import React from "react";
import PropTypes from "prop-types";

import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ clicked, imageID, imageSmall, imageLarge }) => {
  return (
    <li
      key={imageID}
      className={styles.ImageGalleryItem}
      onClick={() => clicked(imageLarge)}
    >
      <img src={imageSmall} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  clicked: PropTypes.func,
  imageID: PropTypes.number,
  imageSmall: PropTypes.string,
  imageLarge: PropTypes.string,
};
export default ImageGalleryItem;
