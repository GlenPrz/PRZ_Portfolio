// components/ScrollToTop.js
import React, { useState, useEffect } from "react";
import "../styles/ScrollToTop.css"; // Ensure you have styles for the button

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button onClick={scrollToTop} className="scroll-to-top">
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
