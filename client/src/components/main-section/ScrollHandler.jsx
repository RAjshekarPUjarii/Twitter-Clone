import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const ScrollHandler = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <Navbar scrolled={scrolled} />;
};

export default ScrollHandler;
