import Image from "next/image";
import { useEffect } from "react";

const Confirmation = ({ setStep }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStep(1);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="absolute top-0 gap-5 bg-white z-40 left-0 w-full text-center h-full flex justify-center items-center flex-col">
      <div className="relative w-[140px] sm:w-[182px] aspect-square">
        <Image src={"/check.png"} alt="...." fill />
      </div>
      <h3 className="text-[1.2rem] font-bold text-blue">Booking Confirmed!</h3>
      <h3 className="text-lg text-center sm:text-[1.2rem] mb-5 font-normal text-blue">
        <strong>Friday,</strong> March 31st 16:00 pm (Uruguay)
      </h3>
    </div>
  );
};

export default Confirmation;
