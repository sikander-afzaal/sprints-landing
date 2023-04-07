import Image from "next/image";

const Software = () => {
  return (
    <div
      data-name="Software Sprints"
      id="software"
      className="wrapper mt-16 sm:mt-[90px] xl:mt-[200px]"
    >
      <div className="contain flex-col justify-center items-center gap-[50px] xl:gap-[80px]">
        <div className="text-center">
          <h2 className="text-[35px] sm:text-[40px] lg:text-[50px]  leading-[1.2] font-black text-white">
            Software Sprints
          </h2>
          <p className="text-base sm:text-xl  text-white font-medium">
            The How
          </p>
        </div>
        <div className="flex relative justify-between items-center gap-28 xl:gap-44 xl:flex-row flex-col isolate">
          <div className="bg-cyan w-[2px] h-full absolute left-1/2 -translate-x-1/2 top-0 -z-10"></div>
          <h3 className="bg-dark w-[136px] h-[50px] grid place-items-center xl:hidden text-white rounded-xl font-semibold text-xl">
            Sprint 1
          </h3>
          <div className="w-[236px] my-3 xl:my-0 xl:w-[270px] aspect-square relative">
            <Image src={"/software1.png"} fill alt="..." />
          </div>{" "}
          <h3 className="bg-dark w-[136px] h-[50px] grid place-items-center xl:hidden text-white rounded-xl font-semibold text-xl">
            Sprint 2
          </h3>
          <div className="w-[236px] my-3 xl:my-0 xl:w-[270px] aspect-square relative">
            <Image src={"/software2.png"} fill alt="..." />
          </div>
          <h3 className="bg-dark w-[136px] h-[50px] grid place-items-center xl:hidden text-white rounded-xl font-semibold text-xl">
            Sprint 3
          </h3>
          <div className="w-[236px] my-3 xl:my-0 xl:w-[270px] aspect-square relative">
            <Image src={"/software3.png"} fill alt="..." />
          </div>
          <h3 className="bg-dark w-[136px] h-[50px] grid place-items-center xl:hidden text-white rounded-xl font-semibold text-xl">
            Delivery
          </h3>
        </div>

        <div className="hidden xl:grid mt-7 grid-cols-7 w-70 gap-2  items-end w-70">
          <div className="flex justify-start items-center gap-2 flex-col w-full text-center">
            <span className="bg-cyan w-full h-[1px]"></span>
            <p className="text-white text-lg 2xl:text-[1.2rem] font-medium">
              Product
            </p>
          </div>
          <h3 className="text-white font-black self-start -mt-3  text-[1.2rem] 2xl:text-[32px] justify-self-center h-max leading-[1]">
            Sprint 1
          </h3>
          <div className="flex justify-start items-center gap-2 flex-col w-full text-center">
            <span className="bg-cyan w-full h-[1px]"></span>
            <p className="text-white text-lg 2xl:text-[1.2rem] font-medium">
              Sprint Review
            </p>
          </div>
          <h3 className="text-white font-black self-start -mt-3  text-[1.2rem] 2xl:text-[32px] justify-self-center h-max leading-[1]">
            Sprint 2
          </h3>
          <div className="flex justify-start items-center gap-2 flex-col w-full text-center">
            <span className="bg-cyan w-full h-[1px]"></span>
            <p className="text-white text-lg 2xl:text-[1.2rem] font-medium">
              Sprint Review
            </p>
          </div>
          <h3 className="text-white font-black self-start -mt-3  text-[1.2rem] 2xl:text-[32px] justify-self-center h-max leading-[1]">
            Sprint 3
          </h3>
          <div className="flex justify-start items-center gap-2 flex-col w-full text-center">
            <span className="bg-cyan w-full h-[1px]"></span>
            <p className="text-white text-lg 2xl:text-[1.2rem] font-medium">
              Project delivery
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-3 sm:gap-8 flex-col sm:mt-4">
          <p className="text-white text-base sm:text-lg max-w-[1000px] text-center font-medium">
          We develop <strong>MVP{"'"}s</strong> in phases, we call
            <strong>
            {" "}{'"'}sprints{'"'}
            </strong>
            .
          </p>
          <p className="text-white text-base sm:text-lg  max-w-[1000px] text-center font-medium">
            Each sprint lasts <strong>4 weeks</strong>, with a{" "}
            <strong>sprint review</strong>
            {" "}afterwards.
          </p>
          <p className="text-white text-base sm:text-lg  max-w-[1000px] text-center font-medium">
           Once the product is finished, we{"'"}ll have a final product delivery review.
          </p>
          <p className="text-white text-base sm:text-lg  max-w-[1000px] text-center font-medium">
            This will allow us to match the vision you have, with the delivered product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Software;
