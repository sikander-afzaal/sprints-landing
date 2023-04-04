import Image from "next/image";
import { useEffect, useState } from "react";
import { Link as Hashlink } from "react-scroll";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Idea to Product");
  useEffect(() => {
    const sections = [
      document.querySelector("#idea"),
      document.querySelector("#software"),
      document.querySelector("#journey"),
      document.querySelector("#reviews"),
    ];
    if (window.innerWidth > 1024) return;
    window.addEventListener("scroll", () => {
      sections.forEach(function (event) {
        if (event.getBoundingClientRect().top < 90) {
          setActiveLink(event.getAttribute("data-name"));
        }
      });
    });
  }, []);

  return (
    <header className="wrapper bg-blue  fixed top-0 left-0 z-50">
      <div className="contain justify-between h-[90px] lg:h-[105px] items-center gap-4">
        <div className="flex justify-between w-full sm:w-auto sm:justify-start items-center gap-5 2xl:gap-8">
          <Image src={"/logo.png"} width={80} height={60} alt="logo" />
          <nav className="flex justify-start items-center gap-5 2xl:gap-3">
            <p className="text-white lg:hidden block px-5 transition-all hover:bg-activeClass duration-500 cursor-pointer py-2 rounded-xl font-semibold text-lg sm:text-base 2xl:text-lg">
              {activeLink}
            </p>
            <Hashlink
              to="idea"
              offset={-110}
              duration={500}
              spy={true}
              activeClass="bg-activeClass"
              className="text-white lg:block hidden px-5 transition-all hover:bg-activeClass duration-500 cursor-pointer py-2 rounded-xl font-semibold text-lg sm:text-base 2xl:text-lg"
            >
              Idea to Product
            </Hashlink>

            <Hashlink
              offset={-110}
              duration={500}
              spy={true}
              to="software"
              activeClass="bg-activeClass"
              className="lg:block hidden px-5 transition-all hover:bg-activeClass duration-500 cursor-pointer py-2 rounded-xl text-white font-semibold text-base 2xl:text-lg"
            >
              Software Sprints
            </Hashlink>
            <Hashlink
              offset={-110}
              duration={500}
              spy={true}
              to="journey"
              activeClass="bg-activeClass"
              className="lg:block hidden px-5 transition-all hover:bg-activeClass duration-500 cursor-pointer py-2 rounded-xl text-white font-semibold text-base 2xl:text-lg"
            >
              Development Journey
            </Hashlink>
            <Hashlink
              offset={-110}
              duration={500}
              spy={true}
              to="reviews"
              activeClass="bg-activeClass"
              className="lg:block hidden px-5 transition-all hover:bg-activeClass duration-500 cursor-pointer py-2 rounded-xl text-white font-semibold text-base 2xl:text-lg"
            >
              Clients Reviews
            </Hashlink>
          </nav>
        </div>
        <a
          href="#book"
          className="sm:grid bg-red text-white font-bold text-base rounded-[14px] px-8 h-[55px] hidden place-items-center border-2 border-solid border-transparent hover:border-white transition-all duration-300"
        >
          Book a call
        </a>
      </div>
    </header>
  );
};

export default Header;
