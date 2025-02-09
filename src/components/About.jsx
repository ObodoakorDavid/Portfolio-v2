import React, { useLayoutEffect, useRef } from "react";
import memoji from "../assets/images/99121582b0b475528445afd816f0621f.png";
import { BsFillSendArrowUpFill } from "react-icons/bs";
import gsap from "gsap";

const About = () => {
  const el = useRef();
  const paragraphRef = useRef();
  const paragraphRef2 = useRef();
  const buttonRef = useRef();
  const tl = useRef();
  const imageRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(imageRef.current, {
          scale: 1.2,
        })
        .to(imageRef.current, {
          scale: 1,
        })
        .to(paragraphRef.current, {
          y: "0",
          duration: 1,
          opacity: 1,
        })
        .to(paragraphRef2.current, {
          y: "0",
          duration: 1,
          opacity: 1,
        })
        .to(buttonRef.current, {
          y: 0,
          duration: 1,
          opacity: 1,
          ease: "bounce",
        });
    }, [el]);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={el} id="about" className="text-center pt-12">
      <div className="py-4 text-left text-xl sm:text-2xl">
        <img ref={imageRef} src={memoji} className=" w-40 mx-auto" alt="" />
        <p ref={paragraphRef} className=" pb-4 -translate-y-[50px] opacity-0">
          I'm a passionate and creative developer with a focus on building
          impactful digital solutions. I build user-friendly websites and
          applications that solve problems and elevate user experiences. With a
          strong eye for design and attention to detail, I thrive on bringing
          ideas to life through clean, efficient, and scalable code.
        </p>
        <a
          href="#contact"
          ref={buttonRef}
          className="border-gray-500 max-w-fit cursor-pointer -translate-y-full opacity-0 border-2 flex items-center gap-2 px-4 py-1 mt-8 rounded-md text-gray-700 transition-all duration-300 ease-in-out hover:gap-6 hover:text-white hover:bg-gray-700 hover:border-gray-700"
        >
          Get In Touch <BsFillSendArrowUpFill />
        </a>
      </div>
    </div>
  );
};

export default About;
