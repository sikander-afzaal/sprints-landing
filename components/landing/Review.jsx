import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Review = () => {
  return (
    <div className="wrapper bg-white py-[100px] md:py-[180px]">
      <div className="contain">
        <Splide
          options={{
            width: "100%",
            pagination: false,
            arrows: true,
            perPage: 1,
            perMove: 1,
            type: "loop",
            gap: "1rem",
            drag: true,
          }}
        >
          <SplideSlide>
            <ReviewBox
              client_logo="/review-ico.png"
              client_name="Tres Cielos"
              client_review={`"Dont just take our word for it Dont just take our word
        for it Dont just take our word for it Dont just take our word
        for it Dont just take our word for it Dont just take our word
        for it Dont just take our word for it Dont just take our word
        for it Dont just take our word for it".`}
              review_writer="Guillermo Vazquez - CEO"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Review;

const ReviewBox = ({
  client_logo,
  client_name,
  client_review,
  review_writer,
}) => {
  return (
    <div className="flex justify-center z-1">
      <div style={{ width: '80%' }} className="md:flex-row flex-col justify-center items-center text-center md:text-left md:items-start gap-5 md:gap-10 w-full flex">
        <Image alt="ico..." src={client_logo} width={78} height={78} />
        <div className="flex justify-start items-center md:items-start flex-col gap-4">
          <h4 className="text-blue text-xl sm:text-[1.2rem] font-bold leading-[1]">
            {client_name}
          </h4>
          <p className="text-base sm:text-xl lg:text-[1.2rem] max-w-[90%] sm:max-w-[1250px] font-normal italic text-blue">
            {client_review}
          </p>
          <h4 className="text-blue md:self-end text-xl sm:text-[1.2rem] font-semibold italic">
            {review_writer}
          </h4>
        </div>
      </div>
    </div>
  );
};
