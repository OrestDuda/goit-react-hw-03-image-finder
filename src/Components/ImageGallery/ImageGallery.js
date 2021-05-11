import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ results, modalWindowsAction }) => {
  return (
    <ul className={styles.ImageGallery}>
      {results.map((result) => (
        <ImageGalleryItem
          clicked={modalWindowsAction}
          imageId={result.id}
          imageSmall={result.webformatURL}
          imageLarge={result.largeImageURL}
        />
      ))}
    </ul>
  );
};
ImageGalleryItem.propTypes = {
  results: PropTypes.array,
  modalWindowsAction: PropTypes.func,
};
export default ImageGallery;
