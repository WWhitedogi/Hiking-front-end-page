import { useState } from 'react';
import '../../css/main-page-components/carousel.css'

function Carousel({ carouselData }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const length = carouselData.length;

  function nextImage() {
    if (currentIndex != length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  function preImage() {
    if (currentIndex != 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(length - 1);
    }
  }

  return (
    <div className="carousel">
      {carouselData.map(
        (item, index) => {
          return (
            <div className={index === currentIndex ? "slide active" : "slide"} key={index}>
              {index === currentIndex && <img src={item} alt="beautiful cherry blossoms" className="image" key={index} />}
            </div>
          );
        }
      )}
      <button className="carousel-arrow left-arrow" onClick={preImage} aria-label="previous image">{'<'}</button>
      <button className="carousel-arrow right-arrow" onClick={nextImage} aria-label="next image">{'>'}</button>

    </div>
  )
}

export default Carousel;