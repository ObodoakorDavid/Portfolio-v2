import React, { useRef } from "react";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaTwitter, FaWhatsapp, FaPhone, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";

const Contact = () => {
  const contactsRef = useRef([]);
  const tl = useRef();

  const contactsIcons = [
    {
      id: 1,
      link: "mailto:obodoakordavid@gmail.com",
      icon: <IoMailOpenOutline />,
    },
    { id: 2, link: "https://x.com/unseendavid", icon: <FaTwitter /> },
    { id: 3, link: "https://wa.me/+2348182921822", icon: <FaWhatsapp /> },
    {
      id: 4,
      link: "https://linkedin.com/in/david-obodoakor-369b1b235",
      icon: <FaLinkedin />,
    },
    { id: 5, link: "tel:+2348182921822", icon: <FaPhone /> },
  ];

  const handleMouseEnter = (element) => {
    tl.current = gsap
      .timeline()
      .to(element, {
        translateY: "-10px",
      })
      .to(element, {
        translateY: "0px",
        ease: "bounce",
      });
  };

  // const handleMouseLeave = (element) => {
  //   tl.current = gsap
  //     .timeline()
  //     .to(element, {
  //       transformOrigin: "90%",
  //     })
  //     .to(element, {
  //       transformOrigin: "100%",
  //     });
  // };

  return (
    <div id="contact" className="pt-20">
      <h3 className="text-center">Get In Touch</h3>
      <div className="flex justify-center gap-4 md:gap-10 py-16">
        {contactsIcons.map((icon, i) => {
          return (
            <a
              onMouseEnter={() => {
                handleMouseEnter(contactsRef.current[i]);
              }}
              onMouseLeave={() => {
                console.log("ll");
                // handleMouseLeave(contactsRef.current[i]);
              }}
              key={icon.id}
              href={icon.link}
              ref={(el) => (contactsRef.current[i] = el)}
            >
              {icon.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
