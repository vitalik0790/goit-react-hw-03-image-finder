import React from 'react'
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ imgList }) => {
    return (
        <ul className={s.ImageGallery}>
            {imgList.map(image => {
                return <ImageGalleryItem image={image} key={image.id} />
            })}
        </ul>
    );
}

export default ImageGallery;