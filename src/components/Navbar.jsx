import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const Navbar = () => {
  const navbarRef = useRef([]);

  useLayoutEffect(() => {
    const navItems = navbarRef.current.map((item) => item);
    gsap.to(navItems, {
      opacity: 1,
      duration: 0.8,
      y: "0",
      stagger: 0.8,
      ease: "bounce",
    });
  }, []);
  return (
    <div className="flex z-50 justify-between items-center text-sm sm:text-xl font-medium p-4 border-b border-gray-300 sticky top-0 z-1 backdrop-blur-sm bg-white/30">
      <a href="#about" className="font-bold text-3xl">
        •••
      </a>

      <div className="flex gap-5">
        <a
          ref={(el) => (navbarRef.current[0] = el)}
          href="#about"
          className=" -translate-y-full  opacity-0  text-gray-500 hover:text-gray-700 transition-all border-b-2 border-white hover:border-b-2 hover:border-gray-800 duration-400 ease-out"
        >
          About
        </a>
        <a
          ref={(el) => (navbarRef.current[1] = el)}
          href="#skills"
          className=" -translate-y-full opacity-0 text-gray-500 hover:text-gray-700 transition-all border-b-0 hover:border-b-2 border-white  hover:border-gray-800 duration-400 ease-out"
        >
          Skills
        </a>
        <a
          ref={(el) => (navbarRef.current[2] = el)}
          href="#projects"
          className=" -translate-y-full opacity-0 text-gray-500 hover:text-gray-700 transition-all border-b-0 hover:border-b-2 border-white  hover:border-gray-800 duration-400 ease-out"
        >
          Projects
        </a>
        <a
          ref={(el) => (navbarRef.current[3] = el)}
          href="#contact"
          className=" -translate-y-full opacity-0 text-gray-500 hover:text-gray-700 transition-all border-b-0 hover:border-b-2 border-white hover:border-gray-800 duration-400 ease-out"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
