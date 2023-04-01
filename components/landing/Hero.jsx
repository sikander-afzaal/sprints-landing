import Image from "next/image";

const Hero = () => {
  return (
    <div className="wrapper relative isolate">
      <div className="absolute lg:block hidden top-[130px] -left-[50px] -z-10">
        <Image src={"/hero-img.png"} width={500} height={500} alt="hero-img" />
      </div>
      <div className="contain h-auto sm:h-screen min-h-[650px] gap-5  py-14 justify-center items-center flex-col text-center">
        <h1 className="text-white mix-blend-difference text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[75px] leading-[1.2] font-black">
          Software MVP Development <br />
          for your startup
        </h1>
        <p className="text-white font-semibold mix-blend-difference leading-[1.3] text-base sm:text-xl xl:text-2xl max-w-[600px]">
          We build custom software applications to turn your startup idea into a
          reality.
        </p>
        <a
          href="#"
          className="grid bg-red text-white font-bold text-xl mt-5 rounded-[14px] px-7 sm:px-10 h-[56px] sm:h-[66px]  place-items-center border-2 border-solid border-red hover:bg-transparent transition-all duration-300"
        >
          Book a call
        </a>
      </div>
    </div>
  );
};

export default Hero;
