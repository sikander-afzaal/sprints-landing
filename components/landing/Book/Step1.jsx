import { useState } from "react";

const Step1 = ({ setStep }) => {
  const [selectedDate, setSelectedDate] = useState("Wed 29");
  const [selectedTime, setSelectedTime] = useState("10:30 am");
  const DummyDates = ["Mon 27", "Tue 28", "Wed 29", "Thur 30", "Fri 31"];
  const DummyTime = [
    {
      time: "10:30 am",
      booked: false,
    },
    {
      time: "10:40 am",
      booked: true,
    },
    {
      time: "10:50 am",
      booked: false,
    },
    {
      time: "11:00 am",
      booked: true,
    },
    {
      time: "11:10 am",
      booked: false,
    },
    {
      time: "11:20 am",
      booked: true,
    },
    {
      time: "11:30 am",
      booked: false,
    },
    {
      time: "11:40 am",
      booked: true,
    },
    {
      time: "11:50 am",
      booked: false,
    },
  ];
  return (
    <div className="flex justify-start items-center flex-col gap-5 w-full">
      <h3 className="text-lg text-center sm:text-2xl mb-5 font-normal text-blue">
        <strong>Friday,</strong> March 31st 16:00 pm (Uruguay)
      </h3>
      <div className="grid grid-cols-[auto__1fr__1fr__1fr__1fr__1fr__auto] sm:grid-cols-7 mt-8 gap-5 place-items-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 sm:hidden block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>

        <button className="bg-lightBlue rounded-xl w-[45px] aspect-square hidden sm:flex justify-center items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        {DummyDates.map((elem, idx) => {
          return (
            <button
              onClick={() => setSelectedDate(elem)}
              key={idx + elem}
              className="flex hover:bg-lightBlue text-blue rounded-xl hover:text-white w-full py-2 transition-all duration-300 justify-start items-center flex-col relative"
            >
              {selectedDate === elem && (
                <div className="rounded-full w-3 sm:w-4 aspect-square bg-blue absolute bottom-[120%] left-1/2 -translate-x-1/2"></div>
              )}
              <p className="text-inherit font-bold w-min text-base sm:text-xl text-center leading-[1.2]">
                {elem}
              </p>
            </button>
          );
        })}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 sm:hidden block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>

        <button className="bg-lightBlue rounded-xl w-[45px] aspect-square hidden sm:flex justify-center items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-8 grid-rows-3 w-full gap-8">
        {DummyTime.map((elem, idx) => {
          return (
            <button
              key={elem.time + idx}
              onClick={() => setSelectedTime(elem.time)}
              className={`w-full bg-lightBlue hover:-translate-y-2 transition-all duration-300 text-white text-xl font-bold ${
                elem.booked
                  ? "opacity-30 pointer-events-none cursor-default"
                  : "opacity-100"
              } ${
                selectedTime === elem.time && !elem.booked
                  ? "shadow-selectedTime"
                  : "shadow-none"
              } h-[80px] rounded-xl`}
            >
              {elem.booked ? "Booked" : elem.time}
            </button>
          );
        })}
      </div>
      <button onClick={() => setStep(2)} className="bookBtn">
        Next Step
      </button>
    </div>
  );
};

export default Step1;
