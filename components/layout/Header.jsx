import Image from "next/image";

const Header = () => {
  return (
    <header className="wrapper bg-blue  fixed top-0 left-0 z-50">
      <div className="contain justify-between h-[130px] items-center gap-4">
        <div className="flex justify-between w-full sm:w-auto sm:justify-start items-center gap-5 2xl:gap-8">
          <Image src={"/logo.png"} width={100} height={70} alt="logo" />
          <nav className="flex justify-start items-center gap-5 2xl:gap-10">
            <a
              href="#"
              className="text-white font-semibold text-lg sm:text-base 2xl:text-lg"
            >
              Idea to Product
            </a>
            <a
              href="#"
              className="md:block hidden text-white font-semibold text-base 2xl:text-lg"
            >
              Well-Architected MVP
            </a>
            <a
              href="#"
              className="xl:block hidden text-white font-semibold text-base 2xl:text-lg"
            >
              Software Sprints
            </a>
            <a
              href="#"
              className="xl:block hidden text-white font-semibold text-base 2xl:text-lg"
            >
              Development Journey
            </a>
            <a
              href="#"
              className="xl:block hidden text-white font-semibold text-base 2xl:text-lg"
            >
              Clients Reviews
            </a>
          </nav>
        </div>
        <a
          href="#"
          className="sm:grid bg-red text-white font-bold text-lg rounded-[14px] px-8 h-[60px] hidden place-items-center border-2 border-solid border-red hover:bg-transparent transition-all duration-300"
        >
          Book a call
        </a>
      </div>
    </header>
  );
};

export default Header;
