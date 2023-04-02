import Image from "next/image";

const Review = () => {
  return (
    <div className="wrapper bg-white py-[100px] md:py-[180px]">
      <div className="contain md:flex-row flex-col justify-center items-center text-center md:text-left md:items-start gap-5 md:gap-10">
        <Image alt="ico..." src="/review-ico.png" width={78} height={78} />
        <div className="flex justify-start items-center md:items-start flex-col gap-4">
          <h4 className="text-blue text-xl sm:text-2xl font-bold leading-[1]">
            Tres Cielos
          </h4>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-[1250px] font-normal italic text-blue">
            {'"'}Don{"'"}t just take our word for it Don{"'"}t just take our
            word for it Don{"'"}t just take our word for it Don{"'"}t just take
            our word for it Don{"'"}t just take our word for it Don{"'"}t just
            take our word for it Don{"'"}t just take our word for it Don{"'"}t
            just take our word for it Don{"'"}t just take our word for it{'"'}.
          </p>
          <h4 className="text-blue md:self-end text-xl sm:text-2xl font-semibold italic">
            Guillermo Vazquez - CEO
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Review;
