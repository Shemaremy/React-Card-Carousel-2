import React from "react";

import './App.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  
  return (
    <>
      <div className="section-one">
        <h1>This for the infinite slider, and the hand slider (app.jsx).</h1>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="Trend">
              <div className="card">1</div>
            </div>
            <div className="Trend">
              <div className="card">2</div>
            </div>
            <div className="Trend">
              <div className="card">3</div>
            </div>
            <div className="Trend">
              <div className="card">4</div>
            </div>
            <div className="Trend">
              <div className="card">5</div>
            </div>
            <div className="Trend">
              <div className="card">6</div>
            </div>
            <div className="Trend">
              <div className="card">7</div>
            </div>
            <div className="Trend">
              <div className="card">8</div>
            </div>
            <div className="Trend">
              <div className="card">9</div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default MultipleItems;
