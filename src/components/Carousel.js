import React, { useState } from 'react';
// import './Carousel.css'; // Import your CSS file for styling

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="carousel">
            <button className="arrow prev" onClick={prevSlide}>{'<'}</button>
            <img className="image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button className="arrow next" onClick={nextSlide}>{'>'}</button>
        </div>
    );
};

export default Carousel;
