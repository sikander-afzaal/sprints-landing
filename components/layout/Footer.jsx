import Image from "next/image";

const Footer = () => {
  return (
    <div className="wrapper py-14">
      <div className="contain lg:flex-row flex-col justify-between items-stretch gap-7">
        <div className="flex justify-start items-center flex-col text-center gap-5">
          <div className="relative w-[150px] sm:w-[180px] lg:w-[212px] h-[200px] sm:h-[220px] lg:h-[257px]">
            <Image alt="..." src="/logo-big.png" fill />
          </div>
          <p className="text-lg xl:text-2xl font-medium text-white">
            Copyright © 2023 Sprints LLC - All Rights Reserved
          </p>
        </div>
        <div className="w-[2px] bg-white"></div>
        <div className="flex justify-start items-center text-center lg:text-left lg:items-start flex-col gap-8">
          <div>
            <h3 className="uppercase text-white text-lg sm:text-xl lg:text-2xl font-bold">
              Central Offices
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white mt-4">
              Periferico Sur 3720, Jardines del Pedregal, Mexico City
            </p>
          </div>
          <div>
            <h3 className="uppercase text-white text-lg sm:text-xl lg:text-2xl font-bold">
              Contact
            </h3>

            <a
              className="text-lg sm:text-xl lg:text-2xl font-medium text-white mt-4"
              href="mailto:company@sprints.dev"
            >
              company@sprints.dev
            </a>
          </div>
          <div>
            <h3 className="uppercase text-white text-lg sm:text-xl lg:text-2xl font-bold">
              Contact
            </h3>

            <a
              className="text-lg sm:text-xl lg:text-2xl font-medium text-white mt-4"
              href="mailto:company@sprints.dev"
            >
              company@sprints.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
