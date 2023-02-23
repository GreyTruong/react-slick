import "./App.css";
import React, { useState } from "react";
// import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Clinks from "./cLink";
import TopBigBanner from "./cSliders";
function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <>
      <Clinks setSlideIndex={setSlideIndex} />
      <TopBigBanner slideIndex={slideIndex} />
    </>
  );
}
export default App;
