import React, { useState, useEffect } from "react";
import "./SlideShow.css";
import makan1 from './Asset/food1.jpg';
import makan2 from './Asset/food2.jpg';
import makan3 from './Asset/food3.jpg';

const images = [makan1, makan2, makan3];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (isDragging) {
      const endX = e.clientX;
      if (startX > endX) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setIsDragging(false);
  };

  return (
    <div className="background">
    <div
      className="slider"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <button className="nav-button prev" onClick={prevSlide}>
        ❮
      </button>
      <img src={images[currentIndex]} alt="Slide" className="slide-image" />
      <button className="nav-button next" onClick={nextSlide}>
        ❯
      </button>
    </div>
    </div>
  );
}

export default Slider;
