import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Slider.css"

const PixelArtSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2500,
    cssEase: "ease",
    draggable: true, 
    swipeToSlide: true,
  };

  return (
    <Slider {...settings}>
      <div className="pixel-art-card">
        <img className="pixel-art" src="/multimedia/pixilart/pixel-art-3.gif"/>
      </div>
      <div className="pixel-art-card">
        <img className="pixel-art" src="/multimedia/pixilart/pixel-art-2.gif"/>
      </div>
      <div className="pixel-art-card">
        <img className="pixel-art" src="/multimedia/pixilart/pixel-art-4.gif"/>
      </div>
      <div className="pixel-art-card">
        <img className="pixel-art" src="/multimedia/pixilart/pixel-art-5.png"/>
      </div>
      <div className="pixel-art-card">
        <img className="pixel-art" src="/multimedia/pixilart/pixel-art-6.png"/>
      </div>
      <div className="pixel-art-card">
        <img className="pixel-art" src="/multimedia/pixilart/pixel-art-7.png"/>
      </div>
      <div className="pixel-art-card">
        <img className="pixel-art" src="/multimedia/pixilart/pixel-art-8.png"/>
      </div>
      <div className="pixel-art-card">
        <img className="pixel-art" src="/multimedia/pixilart/pixel-art-9.png"/>
      </div>
    </Slider>
  )
}

export default PixelArtSlider