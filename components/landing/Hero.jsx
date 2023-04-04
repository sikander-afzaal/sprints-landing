import Image from "next/image";

const Hero = () => {
  return (
    <div className="wrapper relative isolate">
      <div className="absolute lg:block h-screen w-[600px] hidden top-[100px] -left-[20px] -z-10">
        <Image
          src={"/hero-img.png"}
          fill
          alt="hero-img"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="contain h-auto sm:h-screen min-h-[650px] gap-5  py-14 justify-center items-center flex-col text-center">
        <h1 className="text-white mix-blend-difference text-[35px] sm:text-[40px] lg:text-[50px]  leading-[1.2] font-black">
          Software MVP Development <br />
          for your startup
        </h1>
        <p className="text-white font-semibold mix-blend-difference leading-[1.3] text-base  max-w-[340px]">
          We build custom software applications to turn your startup idea into a
          reality.
        </p>
        <a href="#book" className="bookBtn">
          Book a call
        </a>
      </div>
    </div>
  );
};

export default Hero;
