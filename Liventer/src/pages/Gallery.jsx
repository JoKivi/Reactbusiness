import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import '../Styles/galleryPage.css'


const Gallery = () => {
    const [openSlider, setOpenSlider] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0)
    const [imagesList, setImagesList] = useState([]);

    const handleOpenSlider = (imgIndex) => {
        setOpenSlider(true);
        setSlideNumber(imgIndex);
    }

    const showPrevImg = () => {
        if ( slideNumber === 0 ) { setSlideNumber( imagesList.length - 1 ) }
        else { setSlideNumber( slideNumber - 1 )}
    }

    const showNextImg = () => {
        if ( slideNumber === imagesList.length - 1 ) { setSlideNumber( 0 ) }
        else { setSlideNumber( slideNumber + 1 )}
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!openSlider) return; // Jos slider ei ole avoinna, ei tehdä mitään
            if (e.key === 'ArrowLeft') {
                showPrevImg();
            } else if (e.key === 'ArrowRight') {
                showNextImg();
            } else if (e.key === 'Escape') {
                setOpenSlider(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [openSlider, slideNumber]);

    const imageListRef = ref(storage, "liventer-images/")

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((img) => {
                getDownloadURL(img).then((url) => {
                    setImagesList((prev) => [...prev, url]);
                })
            })
        });
    }, []);

    return (
        <div className='galleryPage'>
            <h2>Galleria</h2>
            { openSlider &&
                <div className="sliderWrap">
                    <img src={imagesList[slideNumber]}/>

                    <div className="gallerySliderNavs">
                        <BsArrowLeftShort className='gallerySliderNav' onClick={ () => showPrevImg() } />
                        <IoMdClose className='gallerySliderNav' onClick={ () => setOpenSlider(false) } />
                        <BsArrowRightShort className='gallerySliderNav' onClick={ () => showNextImg() }/>
                    </div>
                </div>
            }

            <div className="galleryWrap">
                {
                    imagesList.map((img, imgIndex) => 
                        <a key={imgIndex}  onClick={() => handleOpenSlider(imgIndex)}><img src={img}/></a>
                    )
                }
            </div>
        </div>
    );
}

export default Gallery;