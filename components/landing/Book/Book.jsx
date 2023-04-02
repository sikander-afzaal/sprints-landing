import Image from "next/image";
import { useState } from "react";

const Book = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    website: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="wrapper bg-white py-[80px] sm:py-[100px] lg:py-[150px]">
      <div className="contain gap-10 justify-between items-stretch">
        <div className="hidden lg:flex justify-start items-start flex-col gap-12 w-full">
          <h3 className="text-blue font-bold text-2xl">What to Expect</h3>
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
        <div className="flex justify-start items-center flex-col gap-5 w-full">
          <h3 className="text-lg sm:text-2xl mb-5 font-normal text-blue">
            <strong>Friday,</strong> March 31st 16:00 pm (Uruguay)
          </h3>
          <div className="flex justify-start flex-col items-center gap-5 w-full max-w-[550px]">
            <FloatInput
              handler={inputHandler}
              val={formData.firstName}
              name="firstName"
              label="First Name"
              ico="/name-ico.png"
            />
            <FloatInput
              handler={inputHandler}
              val={formData.email}
              name="email"
              label="Email"
              ico="/email-ico.png"
            />
            <FloatInput
              handler={inputHandler}
              val={formData.website}
              name="website"
              label="Website or Linkedin"
              ico="/web-ico.png"
            />
            <div className="flex justify-start  mt-2 w-full items-center gap-5">
              <input type="checkbox" id="terms" className="w-4 aspect-square" />
              <label
                htmlFor="terms"
                className="text-cyan italic font-normal text-sm sm:text-lg"
              >
                Agree to Terms and Conditions
              </label>
            </div>
            <div className="flex justify-start w-full items-center gap-5">
              <input
                type="checkbox"
                id="commit"
                className="w-4 aspect-square"
              />
              <label
                htmlFor="commit"
                className="text-cyan italic font-normal text-sm sm:text-lg"
              >
                I commit to assist to the call best of my ability
              </label>
            </div>
            <button className="bookBtn">Book a call</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

const FloatInput = ({ ico, val, name, handler, label }) => {
  return (
    <div className="flex justify-start items-center w-full h-[66px] sm:h-[70px] bg-slate bg-opacity-[0.08] rounded-lg px-5 py-3 gap-5">
      <Image src={ico} alt="..." width={30} height={30} />
      <div className="bg-gray w-[1.2px] h-full"></div>
      <div className="relative w-full h-full">
        <input
          placeholder=" "
          name={name}
          value={val}
          onChange={handler}
          type="text"
          className="w-full peer h-full border-none outline-none bg-transparent text-cyan text-base sm:text-lg font-medium"
        />
        <p
          className={`text-cyan  peer-focus:top-1 sm:peer-placeholder-shown:text-lg peer-placeholder-shown:text-sm peer-placeholder-shown:top-1/2 transition-all duration-500 peer-focus:text-xs top-1 text-xs font-medium absolute left-0 pointer-events-none  -translate-y-1/2`}
        >
          {label}
        </p>
      </div>
    </div>
  );
};
