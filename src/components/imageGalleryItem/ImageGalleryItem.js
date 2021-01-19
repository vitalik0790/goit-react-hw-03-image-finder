import React from 'react'
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
    return (
        <li className={s.ImageGalleryItemImage}>
            <img src={image.webformatURL} alt="" className={s.ImageGalleryItemImage} />
        </li>
    );
}

export default ImageGalleryItem;