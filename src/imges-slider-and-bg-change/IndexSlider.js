import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import orange from "./images/orange.jpg";
import guava from "./images/gauva.jpg";
import watermelon from "./images/watermelon.jpg";
import pineapple from "./images/pineapple.jpg";
import strawberry from "./images/starberry.jpg";

import gauvacan from "./images/gauva-can.jpg";
import pineapplecan from "./images/pineapple-can.webp";
import watermwloncan from "./images/watermelon-can.jpg";
import starberrycan from "./images/straberry-can.jpg";
import orangecan from "./images/orange-can.jpg";

export default function IndexSlider() {
  const FruitsName = [orange, guava, pineapple, strawberry, watermelon];
  const FruitsCanName = [
    orangecan,
    gauvacan,
    pineapplecan,
    starberrycan,
    watermwloncan,
  ];
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  return (
    <div className="">
      <div className="slick-carousel-wrapper w-half">
        <div className="slider-wrapper mt-16 py-16">
          <div className="single-fruit-wrapper">
            <Slider
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
              fade={true}
              arrows={false}
            >
              {FruitsName.map((img, index) => (
                <div key={index}>
                  <figure>
                    <img
                      src={img}
                      alt="fruits-image"
                      className="imgs-fruits shadow-2xl"
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
          <div className="fruits-can--wrapper">
            <Slider
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={1.2}
              centerMode={true}
              // swipeToSlide={true}
              // focusOnSelect={true}
            >
              {FruitsCanName.map((img, index) => (
                <div key={index} className="height-600">
                  <figure>
                    <img
                      src={img}
                      alt="fruits-image"
                      className="imgs-fruits--can"
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
