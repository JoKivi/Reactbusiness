import React, { useState, useEffect } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import './gallerySection.css';

const Slider = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const storage = getStorage();
                const imagesRef = ref(storage, "liventer-images/");
                const result = await listAll(imagesRef);
    
                const fetchedImageUrls = await Promise.all(
                    result.items.slice(0, 6).map(item => getDownloadURL(item))
                );
    
                let imageUrls = [];
                while (imageUrls.length < 18) {
                    fetchedImageUrls.forEach(url => {
                        if (imageUrls.length < 18) {
                            imageUrls.push(url);
                        }
                    });
                }
    
                setImages(imageUrls);
            } catch (error) {
                console.error("Error fetching images: ", error);
            }
        };
    
        fetchImages();
    }, []);
    

    return (
        <div className='slider gallerySliderSection'>
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Gallery image ${index + 1}`} />
            ))}
        </div>
    );
};

const GallerySection = () => {
    return (
        <div name='gallerySection' className='gallerySection'>
            <Slider/>
            <div className="gallerySectionBtn">
                <LinkRouter to='/gallery'>
                    <button>Avaa Galleria</button>
                </LinkRouter>
            </div>
        </div>
    );
};

export default GallerySection;
