import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollProgress);

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-300">
      <div
        className="h-full bg-blue-500 transition-all duration-300 ease-out"
        style={{ width: scrollProgress }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;