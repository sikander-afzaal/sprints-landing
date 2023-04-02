import Image from "next/image";
import { useState } from "react";

const Step1 = ({ setStep }) => {
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
    <div className="flex justify-start items-center flex-col gap-5 w-full">
      <h3 className="text-lg text-center sm:text-2xl mb-5 font-normal text-blue">
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
          <input type="checkbox" id="commit" className="w-4 aspect-square" />
          <label
            htmlFor="commit"
            className="text-cyan italic font-normal text-sm sm:text-lg"
          >
            I commit to assist to the call best of my ability
          </label>
        </div>
        <button onClick={() => setStep(2)} className="bookBtn">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default Step1;

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
          className="w-full peer h-full border-none outline-none bg-transparent text-cyan text-lg font-medium"
        />
        <p
          className={`text-cyan  peer-focus:top-1 peer-placeholder-shown:text-lg  peer-placeholder-shown:top-1/2 transition-all duration-500 peer-focus:text-xs top-1 text-xs font-medium absolute left-0 pointer-events-none  -translate-y-1/2`}
        >
          {label}
        </p>
      </div>
    </div>
  );
};
