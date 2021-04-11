import { useState } from 'react';

const Slider = ({images}) => {

    const [activeSlide, setActiveSlide] = useState(0);
    let currentImage = images[activeSlide];

    return (
        <div className="slide-container">
            <div className="slide">
            <img className="fade" src={currentImage.url} alt={currentImage.url}  />
            </div>
        </div>
    )
}

export default Slider;
