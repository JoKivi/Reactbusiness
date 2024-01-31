import React, { useState, useTransition } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import './galleryPage.css'

import img0 from '../images/img0.webp'
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'
import img4 from '../images/img4.webp'
import img5 from '../images/img5.webp'
import img6 from '../images/img0.webp'
import img7 from '../images/img1.webp'
import img8 from '../images/img2.webp'
import img9 from '../images/img3.webp'
import img10 from '../images/img4.webp'
import img11 from '../images/img5.webp'
import img12 from '../images/img0.webp'
import img13 from '../images/img1.webp'
import img14 from '../images/img2.webp'
import img15 from '../images/img3.webp'
import img16 from '../images/img4.webp'
import img17 from '../images/img5.webp'

/* kun yhteydessä databaseen, lähtee tämä kuvien importtaus hässäkkä */
const EXAMPLEgallerySectionImages = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17]

const Gallery = () => {
    const [openSlider, setOpenSlider] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0)

    const handleOpenSlider = (imgIndex) => {
        setOpenSlider(true);
        setSlideNumber(imgIndex);
    }

    const showPrevImg = () => {
        if ( slideNumber === 0 ) { setSlideNumber( EXAMPLEgallerySectionImages.length - 1 ) }
        else { setSlideNumber( slideNumber - 1 )}
    }

    const showNextImg = () => {
        if ( slideNumber === EXAMPLEgallerySectionImages.length - 1 ) { setSlideNumber( 0 ) }
        else { setSlideNumber( slideNumber + 1 )}
    }

    return (
        <div className='galleryPage'>
            <h2>Galleria</h2>
            { openSlider &&
                <div className="sliderWrap">
                    <img src={EXAMPLEgallerySectionImages[slideNumber]}/>

                    <div className="gallerySliderNavs">
                        <BsArrowLeftShort className='gallerySliderNav' onClick={ () => showPrevImg() } />
                        <IoMdClose className='gallerySliderNav' onClick={ () => setOpenSlider(false) } />
                        <BsArrowRightShort className='gallerySliderNav' onClick={ () => showNextImg() }/>
                    </div>
                </div>
            }

            <div className="galleryWrap">
                {
                    EXAMPLEgallerySectionImages.map((img, imgIndex) => 
                        <a key={imgIndex}  onClick={() => handleOpenSlider(imgIndex)}><img src={img}/></a>
                    )
                }
            </div>
        </div>
    );
}

export default Gallery;