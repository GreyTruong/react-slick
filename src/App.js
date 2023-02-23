import "./App.css";
import React, { useState } from "react";
// import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Top4 from "./Top4";
import TopBigBanner from "./TopBigBanner";
function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <>
      <TopBigBanner slideIndex={slideIndex} />
      <Top4 setSlideIndex={setSlideIndex} />
    </>
  );
}
export default App;
