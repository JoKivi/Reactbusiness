import React from 'react';
import { Link } from 'react-router-dom'

const GallerySection = () => {
    return (
        <div style={{backgroundColor: "#fff"} /* laitoin valkosen vaan selkeyttää sijaintia */}>
            <h1>Gallery Section</h1>
            <Link to="/Gallery" >
                <button>gallery button</button>
            </Link>
        </div>
    );
}

export default GallerySection;