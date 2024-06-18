import React from "react";
import './App.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function UniAutoplay() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  
  return (
    <>
      <div className="section-four">
        <h1>This for the uni autoslide</h1>
        <div className="slider-container-4">
          <Slider {...settings}>
            <div className="Trend">
              <div className="card-4">1</div>
            </div>
            <div className="Trend">
              <div className="card-4">2</div>
            </div>
            <div className="Trend">
              <div className="card-4">3</div>
            </div>
            <div className="Trend">
              <div className="card-4">4</div>
            </div>
            <div className="Trend">
              <div className="card-4">5</div>
            </div>
            <div className="Trend">
              <div className="card-4">6</div>
            </div>
            <div className="Trend">
              <div className="card-4">7</div>
            </div>
            <div className="Trend">
              <div className="card-4">8</div>
            </div>
            <div className="Trend">
              <div className="card-4">9</div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default UniAutoplay;
