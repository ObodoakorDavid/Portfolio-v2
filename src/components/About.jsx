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
          👋 Hey there, I'm David — a budding FullStack Web Developer, currently
          navigating and learning the web one line of code at a time, eagerly
          willing to learn anything that has to do with building and making the
          web look good and also function optimally.
        </p>
        <p ref={paragraphRef2} className="-translate-y-[50px] opacity-0">
          By day, I'm weaving digital wonders as a web developer and by night
          i'm binge watch my favorite animes. Teaching is my jam too — your
          go-to tutor for navigating the vast realm of web development.
        </p>
        <a
          href="#contact"
          ref={buttonRef}
          className="border-gray-500 max-w-fit cursor-pointer -translate-y-full opacity-0 border-2 flex items-center gap-2 hover:gap-6 px-4 py-1 mt-8 rounded-md hover:text-white hover:bg-gray-700 hover:border-gray-700 hover:transition-all ease-in-out"
        >
          Get In Touch <BsFillSendArrowUpFill />
        </a>
      </div>
    </div>
  );
};

export default About;
