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
      {/* Shaya - Fit navbar elements to the height: 14vh applied */}
      {/* Shaya - Contain applies a 90% width, make it 95%*/}
      {/* Shaya - Center navbar sections between logo and button*/}
      <div className="contain justify-between h-[90px] lg:min-h-[100px] lg:h-[14vh] items-center gap-4">
        <div className="flex justify-between w-full  sm:justify-start items-center gap-5 2xl:gap-8">
          <Image src={"/logo.png"} width={70} height={70} alt="logo" />
          <nav className="flex sm:w-full justify-center items-center gap-5 2xl:gap-3">
            <p className="text-white lg:hidden block px-5 transition-all hover:bg-activeClass duration-500 cursor-pointer py-2 rounded-xl font-semibold text-lg sm:text-base 2xl:text-lg">
              {activeLink}
            </p>
            <Hashlink
              to="idea"
              offset={-110}
              duration={500}
              spy={true}
              activeClass="bg-activeClass"
              className="text-white lg:block hidden px-5 transition-all hover:bg-activeClass duration-500 cursor-pointer py-2 rounded-lg font-semibold text-sm sm:text-base 2xl:text-lg"
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
          className="sm:grid bg-red min-w-max text-white font-bold text-base rounded-[14px] px-8 h-[55px] hidden place-items-center border-2 border-solid border-transparent hover:border-white transition-all duration-300"
        >
          {/* Shaya - Smaller text, smaller width*/}
          Book a call
        </a>
      </div>
    </header>
  );
};

export default Header;
