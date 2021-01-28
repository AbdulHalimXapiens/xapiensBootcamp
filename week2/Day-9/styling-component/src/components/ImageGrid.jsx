import React from 'react';
import '../assets/grid.css';
import img1 from '../assets/img/1.jpg'
import img2 from '../assets/img/2.jpg'
import img3 from '../assets/img/3.jpg'
import img4 from '../assets/img/4.jpg'

const Image = () => {
    return (
        
        <div className="parent">
            <div className="gallery">
                <img src={img1} />
            </div>
            <div className="gallery">
                <img src={img2} />
            </div>
            <div className="gallery">
                <img src={img3} />
            </div>
            <div className="gallery">
                <img src={img4} />
            </div>
        </div>
        
        
    )
}

export default Image;