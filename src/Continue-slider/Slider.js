import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderCurosel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: false,
  };
  return (
    <div className="slider-container container mt-44">
      <Slider {...settings} className="cards-childs">
        <div>
          <div className="card-wrapper">
            <div className="custom-card">
              <h3>International Proprerty Award Asia-Pacific 2012 </h3>
              <span>1985</span>
            </div>
            <div className="hr"></div>
          </div>
        </div>
        <div>
          <div>
            <div className="card-wrapper">
              <div className="custom-card">
                <h3>International Proprerty Award Asia-Pacific 2012 </h3>
                <span>1985</span>
              </div>
              <div className="hr"></div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="card-wrapper">
              <div className="custom-card">
                <h3>International Proprerty Award Asia-Pacific 2012 </h3>
                <span>1985</span>
              </div>
              <div className="hr"></div>
            </div>
          </div>{" "}
        </div>
        <div>
          <div className="card-wrapper">
            <div className="custom-card">
              <h3>International Proprerty Award Asia-Pacific 2012 </h3>
              <span>1985</span>
            </div>
            <div className="hr"></div>
          </div>
        </div>{" "}
        <div>
          <div className="card-wrapper">
            <div className="custom-card">
              <h3>International Proprerty Award Asia-Pacific 2012 </h3>
              <span>1985</span>
            </div>
            <div className="hr"></div>
          </div>
        </div>{" "}
        <div>
          <div className="card-wrapper">
            <div className="custom-card">
              <h3>International Proprerty Award Asia-Pacific 2012 </h3>
              <span>1985</span>
            </div>
            <div className="hr"></div>
          </div>
        </div>{" "}
        <div>
          <div className="card-wrapper">
            <div className="custom-card">
              <h3>International Proprerty Award Asia-Pacific 2012 </h3>
              <span>1985</span>
            </div>
            <div className="hr"></div>
          </div>
        </div>{" "}
      </Slider>
    </div>
  );
}
