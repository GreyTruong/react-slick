import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Sliders({ slideIndex }) {
  const slider = useRef();

  useEffect(() => {
    // call slickNext when slideIndex is changed.
    slider.current.slickNext();
  }, [slideIndex]);

  return (
    <Slider ref={slider}>
      <div>
        <img
          src="https://img.hapitas.jp/img/images/banner/tmp/20230120111839508.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://img.hapitas.jp/img/images/banner/tmp/20230210150149329.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://srv2.trafficgate.net/t/b/498/1396/152631_162253"
          alt=""
        />
      </div>
    </Slider>
  );
}

Sliders.defaultProps = {
  slideIndex: 0,
};
export default Sliders;
