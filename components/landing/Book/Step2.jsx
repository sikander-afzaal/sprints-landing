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
      <h3 className="text-md text-center sm:text-[1.2rem] mb-5 font-normal text-blue">
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
              label="Email of guest"
              ico="/email-ico.png"
            />
            <button
              type="submit"
              className="bg-slate min-w-[80px] rounded-lg h-full  -opacity-[0.08] flex justify-center items-center"
            >
              <Image src={"/enter.png"} alt="..." width={40} height={40} />
            </button>
          </form>
        ) : formData.people.length === 0 ? (
          <div className="flex justify-start items-center w-full h-[60px] border-dashed border-[5px] border-opacity-[0.08] border-[#707070] sm:h-[54px] bg-transparent bg-opacity-[0.08] rounded-lg px-5 py-3 gap-5">
            <Image src={"/add.png"} alt="..." width={30} height={30} />
            <div className="bg-gray w-[1.2px] h-full"></div>
            <button
              onClick={() => setAddingPeople(true)}
              className="flex justify-start items-center w-full"
            >
              <p className="text-cyan text-md font-medium">
                Invite people to the call
              </p>
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap justify-start items-center w-full gap-4">
            {formData.people.map((elem, idx) => {
              return (
                <div
                  key={idx + "people"}
                  className="rounded-lg bg-slate bg-opacity-[0.08] px-5 sm:h-[54px] h-[60px]  flex justify-center items-center"
                >
                  <Image src={"/id.png"} alt="..." width={30} height={30} />
                </div>
              );
            })}
            <div
              onClick={() => setAddingPeople(true)}
              className="flex cursor-pointer justify-start items-center  h-[60px] border-dashed border-[5px] border-opacity-[0.08] border-[#707070] sm:h-[54px] bg-transparent  rounded-lg px-5  gap-5"
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
        <div
          style={{ width: "80%" }}
          className="flex justify-start  mt-2 w-full items-center gap-5"
        >
          <input type="checkbox" id="terms" className="w-4 aspect-square" />
          <label
            htmlFor="terms"
            className="text-cyan italic font-normal text-md sm:text-md"
          >
            Agree to Terms and Conditions
          </label>
        </div>
        {/* Agree to assist to the call*/}
        {/* <div style={{ width: '80%' }} className="flex justify-start w-full items-center gap-5">
          <input type="checkbox" id="commit" className="w-4 aspect-square" />
          <label
            htmlFor="commit"
            className="text-cyan italic font-normal text-sm sm:text-lg"
          >
            I commit to assist to the call
          </label>
        </div> */}
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
    <div className="flex justify-start items-center w-full h-[60px] sm:h-[54px] bg-slate bg-opacity-[0.08] rounded-lg px-5 py-3 gap-5">
      <Image src={ico} alt="..." width={30} height={30} />
      <div className="bg-gray w-[1.2px] h-full"></div>
      <div className="relative w-full h-full">
        <input
          placeholder=" "
          name={name}
          value={val}
          onChange={handler}
          type="text"
          className="w-full peer h-full border-none outline-none bg-transparent text-cyan text-base font-medium"
        />
        <p
          className={`text-cyan  peer-focus:top-0 peer-placeholder-shown:text-base  peer-placeholder-shown:top-1/2 transition-all duration-500 peer-focus:text-xs top-0 text-xs font-medium absolute left-0 pointer-events-none  -translate-y-1/2`}
        >
          {label}
        </p>
      </div>
    </div>
  );
};
