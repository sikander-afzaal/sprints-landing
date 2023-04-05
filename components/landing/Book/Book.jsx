import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Confirmation from "./Confirmation";

const Book = () => {
  const [step, setStep] = useState(1);
  return (
    <div
      id="book"
      className="flex w-full justify-center items-center bg-white  relative min-h-[650px] h-auto md:py-0 py-12 md:h-screen"
    >
      {step === 3 && <Confirmation setStep={setStep} />}
      <div className="contain gap-10 justify-between items-stretch">
        <div className="hidden lg:flex justify-start items-start flex-col gap-12 w-full">
          <h3 className="text-blue font-bold text-[1.2rem]">What to Expect</h3>
          <div className="flex justify-start items-start flex-col gap-5">
            <h3 className="text-blue underline font-semibold text-xl">
              Initial call
            </h3>
            <p className="text-xl text-blue">
              <strong className="italic">20 min - </strong> The concept we are
              building for you,
            </p>
            <p className="text-xl text-blue">
              <strong className="italic">5 min - </strong> The current status of
              the project.
            </p>
            <p className="text-xl text-blue">
              <strong className="italic">5 min - </strong> The people involved
              in the project.
            </p>
            <p className="text-xl text-blue">
              <strong className="italic">Total call time - </strong> 30 min
            </p>
          </div>
          <div className="flex justify-start items-start flex-col gap-5">
            <h3 className="text-blue underline font-semibold text-xl">
              Features call ( Initial call required )
            </h3>
            <p className="text-xl text-blue">
              <strong className="italic">20 min - </strong> The concept we are
              building for you,
            </p>
            <p className="text-xl text-blue">
              <strong className="italic">up to 2 hours - </strong> In this
              second call we dive deep into your product{"'"}s features. This
              way we can have certainty on the time and budget needed to build
              your software solution.
            </p>
          </div>
        </div>
        <div className="w-[2px] lg:block hidden bg-blue"></div>
        {step === 1 && <Step1 setStep={setStep} />}
        {step === 2 && <Step2 setStep={setStep} />}
      </div>
    </div>
  );
};

export default Book;
