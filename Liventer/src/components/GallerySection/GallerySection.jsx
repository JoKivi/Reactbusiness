import React from 'react';
import { Link as LinkRouter } from 'react-router-dom'
import './gallery.css'

import img0 from '../../images/img0.webp'
import img1 from '../../images/img1.webp'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'
import img4 from '../../images/img4.webp'
import img5 from '../../images/img5.webp'
import img6 from '../../images/img0.webp'
import img7 from '../../images/img1.webp'
import img8 from '../../images/img2.webp'
import img9 from '../../images/img3.webp'
import img10 from '../../images/img4.webp'
import img11 from '../../images/img5.webp'

const gallerySectionImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]

const Slider = () => {
    return (
        <div className='slider gallerySliderSection'>
            {gallerySectionImages.map((img, index) => 
                <img key={index} src={img}/>
            )}
        </div>
    )
}

const GallerySection = () => {
    return (
        <div name='gallerySection' className='gallerySection'>
                <Slider/>
                <LinkRouter to='/gallery' className='gallerySectionBtn'>
                    <button>Avaa Galleria</button>
                </LinkRouter>
        </div>
    );
}

export default GallerySection;