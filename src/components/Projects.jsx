import React, { useRef } from "react";
import { data } from "../data/data";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";

const Projects = () => {
  const cards = useRef([]);
  return (
    <div id="projects" className="pt-20">
      <p className="pb-6">Projects</p>
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.ReactData.map((project, i) => {
          return (
            <div
              ref={(el) => (cards.current[i] = el)}
              key={project.id}
              className=" flex flex-col h-full shadow hover:shadow-lg transition-all duration-300 ease-in overflow-hidden rounded"
            >
              <img src={project.img} alt="" className="w-full object-cover" />
              <div className="p-4 flex flex-col gap-4 h-full ">
                <p className=" text-gray-600 text-2xl md:text-3xl font-medium hover:text-gray-800 cursor-pointer">
                  {project.name}
                </p>
                <p className="text-lg ">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  <span className="text-xl font-semibold">Built With:</span>
                  {project.tools.map((tool) => {
                    return (
                      <li
                        key={tool}
                        className="text-sm bg-gray-100 px-4 py-1 rounded-full"
                      >
                        {tool}
                      </li>
                    );
                  })}
                </ul>
                <div className="flex gap-3 text-sm h-full items-end">
                  {project.Github && (
                    <a
                      className="border text-gray-900 flex gap-2 items-center font-medium px-2 py-1 rounded border-gray-600 hover:border-gray-800"
                      href={project.Github}
                    >
                      <BsGithub />
                      Github
                    </a>
                  )}
                  <a
                    className="border text-gray-900 flex gap-2 items-center font-medium px-3 py-1 rounded border-gray-600 hover:border-gray-800"
                    href={project.LiveDemo}
                    target="_blank"
                  >
                    {/* <BsBoxArrowUpRight className="hover:text-sm" /> */}
                    <FaExternalLinkAlt className="hover:text-sm" />
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
