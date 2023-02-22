import React, { useState, useEffect } from "react";

function Links({ nextSlice }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // This is example.
      setSeconds((seconds) => seconds + 5);
      //
      nextSlice(Math.random());
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <ul>
        <li>{seconds} seconds have elapsed since mounting.</li>
      </ul>
    </>
  );
}

export default Links;
