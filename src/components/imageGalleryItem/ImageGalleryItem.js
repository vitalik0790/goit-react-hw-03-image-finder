import React from 'react'
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onImageClick }) => {
    // console.log(image.largeImageURL)
    return (
        <li className={s.ImageGalleryItemImage} onClick={onImageClick}>
            <img src={webformatURL} alt={tags} className={s.ImageGalleryItemImage} data-sourse={largeImageURL} />
        </li>
    );
}

export default ImageGalleryItem;