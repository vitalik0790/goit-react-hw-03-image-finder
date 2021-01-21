import React from 'react'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from "prop-types";

const ImageGallery = ({ imgList, onImageClick }) => {
    return (
        <ul className={s.ImageGallery}>
            {imgList.map(image => {
                return <ImageGalleryItem {...image} key={image.id} onImageClick={onImageClick} />
            })}
        </ul>
    );
}

ImageGallery.propTypes = {
    imgList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onImageClick: PropTypes.func.isRequired,
}

export default ImageGallery;