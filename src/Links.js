import React, { useState, useEffect } from "react";
const images = [
  "https://img.hapitas.jp/img/images/banner/202004211402402511.png",
  "https://img.hapitas.jp/img/images/banner/tmp/202212151854106343.png",
  "https://img.hapitas.jp/img/images/banner/202004211403269111.png",
  "https://img.hapitas.jp/img/images/banner/tmp/202302021605456603.jpg",
  "https://img.hapitas.jp/img/images/banner/tmp/202302091108298657.png",
];

function Links({ nextSlice }) {
  const [seconds, setSeconds] = useState(0);
  const [imageIndex, setImageIndex] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // This is example.
      setSeconds((seconds) => seconds + 5);
      setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      //
      nextSlice(Math.random());
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h3>{seconds} seconds have elapsed since mounting.</h3>

      <img src={images[imageIndex]} alt="" style={{ width: 500 }} />
      <p></p>
    </>
  );
}

export default Links;
