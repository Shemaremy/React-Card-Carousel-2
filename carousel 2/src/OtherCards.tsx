import React from "react";
import './App.css';

import Slider from "react-slick";


function CenterMode() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <>
        <div className="section-two">
          <h1>This one is also infinite but the speed of it is very favourable (OtherCards.jsx)</h1>
          <div className="slider-container-2">
            <Slider {...settings}>
              <div className="Trend-2">
                  <div className="card-2">1</div>
              </div>
              <div className="Trend-2">
                  <div className="card-2">2</div>
              </div>
              <div className="Trend-2">
                  <div className="card-2">3</div>
              </div>
              <div className="Trend-2">
                  <div className="card-2">4</div>
              </div>
              <div className="Trend-2">
                  <div className="card-2">5</div>
              </div>
              <div className="Trend-2">
                  <div className="card-2">6</div>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
  
  export default CenterMode;
  
