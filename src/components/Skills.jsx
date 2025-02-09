import React, { useLayoutEffect, useRef } from "react";
import {
  FaPython,
  FaHtml5,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  SiSequelize,
  SiTailwindcss,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiSwagger,
  SiNestjs,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { DiDjango } from "react-icons/di";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiNextjsFill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const icons = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "CSS3",
      icon: <IoLogoCss3 className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "BootStrap",
      icon: <FaBootstrap className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "Tailwindcss",
      icon: <SiTailwindcss className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "ReactJs",
      icon: <FaReact className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "NextJs",
      icon: <RiNextjsFill className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "NodeJs",
      icon: <FaNodeJs className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "Django",
      icon: <DiDjango className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "ExpressJs",
      icon: <SiExpress className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "NestJs",
      icon: <SiNestjs className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "Mongoose",
      icon: <SiMongoose className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "Swagger",
      icon: <SiSwagger className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "Sequelize",
      icon: <SiSequelize className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "Postgresql",
      icon: <BiLogoPostgresql className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-xl sm:text-2xl md:text-3xl" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl sm:text-2xl md:text-3xl" />,
    },
  ];

  const skillsRef = useRef([]);

  useLayoutEffect(() => {
    skillsRef.current.forEach((item, i) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: "top 96%",
          toggleActions: "restart none none reverse",
          // markers: true,
        },
      });
    });
  }, []);

  return (
    <div id="skills" className="pt-20">
      <h2 className="pb-3">Tools</h2>
      <p className="text-sm">
        Here are some of the tools i've used and still use...
      </p>
      <div className="grid gap-2 pt-3 min-[425px]:grid-cols-2">
        {icons.map((icon, i) => {
          return (
            <div
              ref={(el) => (skillsRef.current[i] = el)}
              key={icon.name}
              className=" opacity-0 translate-y-full flex items-center gap-2 shadow-md hover:shadow-lg rounded px-3 py-1"
            >
              {icon.icon}
              <p className="text-xl sm:text-2xl">{icon.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
