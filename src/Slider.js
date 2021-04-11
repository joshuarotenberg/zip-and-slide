import { useState } from 'react';
import Stats from './Stats';

const Slider = ({images}) => {

    const [activeSlide, setActiveSlide] = useState(0);
    let currentImage = images[activeSlide];
    let lastSlide = images.length - 1;

    const handleNextSlide = () => {
        if (activeSlide !== lastSlide) {
            setActiveSlide(activeSlide + 1)
        } else {
            setActiveSlide(0);
        }
    }

    const handlePrevSlide = () => {
        if (activeSlide !== 0) {
        setActiveSlide(activeSlide - 1)
        } else {
            setActiveSlide(lastSlide)
        }
    }

    return (
        <>
            <Stats images={images} activeSlide={activeSlide} />
            <div className="slide-container">
                <div className="slide">
                    <img className="fade" src={currentImage.url} alt={currentImage.url}  />
                    <div className="arrows">
                        <div className="nav-action" id="arrow-left" onClick={handlePrevSlide}><i className="fas fa-caret-left"></i></div>
                        <div className="nav-action" id="arrow-right" onClick={handleNextSlide}><i className="fas fa-caret-right"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;
