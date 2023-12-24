import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
    return () => window.removeEventListener("scroll", () => {});
  }, [window.scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return scrollPosition > 1000 ? (
    <FaArrowUp
      onClick={scrollToTop}
      className=" cursor-pointer fixed bottom-5 right-5 bg-gray-400 p-2 rounded-full text-4xl"
    />
  ) : null;
};

export default ScrollToTop;
