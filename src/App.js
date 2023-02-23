import "./App.css";
import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Top4 from "./Top4";
import TopBigBanner from "./TopBigBanner";
function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // This is example.
      setSlideIndex((slideIndex) => slideIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <TopBigBanner slideIndex={slideIndex} />
      {/* <Top4 slideIndex={slideIndex} /> */}
    </>
  );
}
export default App;
