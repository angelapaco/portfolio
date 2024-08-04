import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Slider.css"

const BlenderSlider = () => {
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
    swipeToSlide: true
  };

  return (
    <Slider {...settings}>
      <div className="blender-thumbnail">
        <img className="blender-model" src="/multimedia/blender/donut.png"/>
      </div>
      <div className="blender-thumbnail">
        <img className="blender-model" src="/multimedia/blender/space-bottle.png"/>
      </div>
      <div className="blender-thumbnail">
        <img className="blender-model" src="/multimedia/blender/cyberpunk-building.png"/>
      </div>
      <div className="blender-thumbnail">
        <img className="blender-model" src="/multimedia/blender/rendered-image-1.png"/>
      </div>
      <div className="blender-thumbnail">
        <img className="blender-model" src="/multimedia/blender/rendered-image-2.png"/>
      </div>
      <div className="blender-thumbnail">
        <img className="blender-model" src="/multimedia/blender/rendered-image-3.png"/>
      </div>
      <div className="blender-thumbnail">
        <img className="blender-model" src="/multimedia/blender/rendered-image-5.png"/>
      </div>
    </Slider>
  )
}

export default BlenderSlider