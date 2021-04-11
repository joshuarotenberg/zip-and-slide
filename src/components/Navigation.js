const Navigation = ({activeSlide, setActiveSlide, images}) => {

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
        <div className="arrows">
            <div className="nav-action" id="arrow-left" onClick={handlePrevSlide}><i className="fas fa-caret-left"></i></div>
            <div className="nav-action" id="arrow-right" onClick={handleNextSlide}><i className="fas fa-caret-right"></i></div>
        </div>
    )
  }
  
  export default Navigation;