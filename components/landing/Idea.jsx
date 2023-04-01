import Image from "next/image";

const Idea = () => {
  return (
    <div className="wrapper  sm:mt-[90px] xl:mt-[150px]">
      <div className="contain flex-col justify-center items-center gap-[50px] xl:gap-[100px]">
        <div className="text-center">
          <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[75px] leading-[1.2] font-black text-white">
            Idea to product
          </h2>
          <p className="text-base sm:text-xl xl:text-[26px] text-white font-medium">
            Great ideas deserve to become great products
          </p>
        </div>
        <div className="flex justify-center xl:justify-between items-center gap-1 w-full">
          <Image src={"/idea-img.png"} width={350} height={340} alt="...." />
          <div className="xl:block hidden">
            <Image src={"/idea-img.png"} width={350} height={340} alt="...." />
          </div>
          <div className="xl:block hidden">
            <Image src={"/idea-img.png"} width={350} height={340} alt="...." />
          </div>
        </div>
        <div className="flex justify-start items-start flex-col gap-5 ">
          <p className="text-base sm:text-xl xl:text-[26px] font-medium text-white">
            Creating a startup is a journey full of challenges, but we{"'"}re
            here to guide you every step of the way.
          </p>
          <p className="text-base sm:text-xl xl:text-[26px] font-medium text-white">
            Our team will work with you to understand your users needs so we can
            build a solid, scalable, and reliable product for you.
          </p>
          <p className="text-base sm:text-xl xl:text-[26px] font-medium text-white">
            We{"'"}ve seen firsthand the impact that a well-executed MVP can
            have on a business, and our team is committed to helping you achieve
            that same success.
          </p>
          <p className="text-base sm:text-xl xl:text-[26px] font-medium text-white">
            Here is how….
          </p>
        </div>
      </div>
    </div>
  );
};

export default Idea;
