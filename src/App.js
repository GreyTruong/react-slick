import "./App.css";
import React, { useState } from "react";
// import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Links from "./Links";
import Sliders from "./Sliders";
function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  return (
    <>
      <Sliders slideIndex={slideIndex} />
      <Links nextSlice={setSlideIndex} />
    </>
  );
}
export default App;
