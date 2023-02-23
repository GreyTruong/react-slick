import React from "react";
// import PropTypes from "prop-types";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TopBigBanner extends React.Component<Props, State> {
  componentDidUpdate() {
    this.slider.slickNext();
  }
  render() {
    const settings = {
      dots: true,
      arrows: false,
      // infinite: true,
      speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      autoplay: false,
    };

    return (
      <div>
        <Slider {...settings} ref={(c) => (this.slider = c)}>
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
      </div>
    );
  }
}
TopBigBanner.propTypes = {
  getTopBigBannerData: PropTypes.func,
  topBigBannerData: PropTypes.object,
  isFetching: PropTypes.bool,
};
TopBigBanner.defaultProps = {
  topBigBannerData: {},
};

export default TopBigBanner;
