import React, { useState, useEffect } from "react";
const images = [
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg",
  "https://i.ytimg.com/vi/jpsGLsaZKS0/maxresdefault.jpg",
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

      <img src={images[imageIndex]} alt="" />
    </>
  );
}

export default Links;
