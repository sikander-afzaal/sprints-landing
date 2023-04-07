import Image from "next/image";

const Footer = () => {
  return (
    <div style={{ width: '98%' }} className="wrapper py-14">
      <div style={{ width: '80%' }} className="contain lg:flex-row flex-col justify-between items-stretch gap-7">
        <div className="flex justify-start items-center flex-col text-center gap-5">
          <div className="relative w-[150px] sm:w-[180px] lg:w-[140px]">
            <Image alt="..." src="/logo-big.png" width={1000} height={1000} />
          </div>
          <p className="text-md xl:text-lg font-medium text-white">
            Copyright © 2023 Sprints LLC - All Rights Reserved
          </p>
        </div>
        <div className="w-[2px] bg-white"></div>
        <div className="flex justify-center items-center text-center lg:text-left lg:items-start flex-col gap-8">
          <div>
            <h3 className="uppercase text-white text-lg sm:text-[1.2rem] font-bold">
              Central Offices
            </h3>
            <p className="text-base font-medium text-white mt-4">
              Periferico Sur 3720, Jardines del Pedregal, Mexico City
            </p>
          </div>
          <div>
            <h3 className="uppercase text-white text-lg sm:text-[1.2rem] font-bold">
              Contact
            </h3>

            <a
              className="text-base font-medium text-white mt-4"
              href="mailto:company@sprints.dev"
            >
              company@sprints.dev
            </a>
          </div>
          <div>
            <h3 className="uppercase text-white text-lg sm:text-[1.2rem] font-bold">
              Blog
            </h3>

            <a
              className="text-base font-medium text-white mt-4"
              href="mailto:company@sprints.dev"
            >
              blog.sprints.dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
