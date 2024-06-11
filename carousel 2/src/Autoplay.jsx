import React from "react";
import './App.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Autoplay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  
  return (
    <>
      <div className="section-three">
        <h1>This for the auto slider (Autoplay.jsx).</h1>
        <div className="slider-container-3">
          <Slider {...settings}>
            <div className="Trend">
              <div className="card-3">1</div>
            </div>
            <div className="Trend">
              <div className="card-3">2</div>
            </div>
            <div className="Trend">
              <div className="card-3">3</div>
            </div>
            <div className="Trend">
              <div className="card-3">4</div>
            </div>
            <div className="Trend">
              <div className="card-3">5</div>
            </div>
            <div className="Trend">
              <div className="card-3">6</div>
            </div>
            <div className="Trend">
              <div className="card-3">7</div>
            </div>
            <div className="Trend">
              <div className="card-3">8</div>
            </div>
            <div className="Trend">
              <div className="card-3">9</div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Autoplay;
