import { useState } from 'react';
import Navigation from './Navigation';
import Stats from './Stats';

const Slider = ({images}) => {

    const [activeSlide, setActiveSlide] = useState(0);
    let currentImage = images[activeSlide];
    

    return (
        <>
            <Stats images={images} activeSlide={activeSlide} />
            <div className="slide-container">
                <div className="slide">
                    <img className="fade" src={currentImage.url} alt={currentImage.url}  />
                    <Navigation images={images} activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
                </div>
            </div>
        </>
    )
}

export default Slider;
