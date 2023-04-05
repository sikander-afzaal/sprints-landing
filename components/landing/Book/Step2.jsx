import Image from "next/image";
import { useState } from "react";

const Step2 = ({ setStep }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    website: "",
    people: [],
    tempEmail: "",
  });
  const [addingPeople, setAddingPeople] = useState(false);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // const addPeopleHandler = (e) => {
  //   const { value } = e.target;
  //   console.log(value);
  //   if (e.key === "Enter") {

  //   } else {
  //     setFormData((prev) => ({ ...prev, tempEmail: value }));
  //   }
  // };
  return (
    <div className="flex justify-start items-center flex-col gap-5 w-full">
      <h3 className="text-lg text-center sm:text-[1.2rem] mb-5 font-normal text-blue">
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
        {addingPeople ? (
          <form
            className="w-full flex justify-start items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              setFormData((prev) => ({
                ...prev,
                people: [...prev.people, prev.tempEmail],
                tempEmail: "",
              }));
              setAddingPeople(false);
            }}
          >
            <FloatInput
              handler={inputHandler}
              val={formData.tempEmail}
              name="tempEmail"
              label="Email"
              ico="/email-ico.png"
            />
            <button
              type="submit"
              className="bg-slate min-w-[80px] rounded-lg h-full bg-opacity-[0.08] flex justify-center items-center"
            >
              <Image src={"/enter.png"} alt="..." width={40} height={40} />
            </button>
          </form>
        ) : formData.people.length === 0 ? (
          <div className="flex justify-start items-center w-full h-[66px] border-dashed border-[5px] border-opacity-[0.08] border-[#707070] sm:h-[70px] bg-transparent bg-opacity-[0.08] rounded-lg px-5 py-3 gap-5">
            <Image src={"/add.png"} alt="..." width={30} height={30} />
            <div className="bg-gray w-[1.2px] h-full"></div>
            <button
              onClick={() => setAddingPeople(true)}
              className="flex justify-start items-center w-full"
            >
              <p className="text-cyan text-lg font-medium">
                Invite people to the call
              </p>
            </button>
          </div>
        ) : (
          <div className="flex justify-start items-center w-full gap-4">
            <div className="rounded-lg bg-slate bg-opacity-[0.08] px-5 sm:h-[65px] h-[60px]  flex justify-center items-center">
              <Image src={"/id.png"} alt="..." width={30} height={30} />
            </div>
            <div
              onClick={() => setAddingPeople(true)}
              className="flex cursor-pointer justify-start items-center  h-[60px] border-dashed border-[5px] border-opacity-[0.08] border-[#707070] sm:h-[65px] bg-transparent  rounded-lg px-5  gap-5"
            >
              <Image src={"/add.png"} alt="..." width={30} height={30} />
            </div>
          </div>
        )}

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
        <button onClick={() => setStep(3)} className="bookBtn">
          Book a call
        </button>
      </div>
    </div>
  );
};

export default Step2;

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
