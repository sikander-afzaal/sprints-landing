import Head from "next/head";
import { Raleway } from "next/font/google";
import Hero from "@/components/landing/Hero";
import Idea from "@/components/landing/Idea";
import Software from "@/components/landing/Software";
import Journey from "@/components/landing/Journey";
import Review from "@/components/landing/Review";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --raleway-font: ${raleway.style.fontFamily};
          }
        `}
      </style>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Idea />
      <Software />
      <Journey />
      <div className="text-center py-[70px] md:py-[100px] flex justify-center items-center flex-col">
        <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[75px] leading-[1.2] font-black text-white">
          Clients Reviews
        </h2>
        <p className="text-base sm:text-xl xl:text-[26px] text-white font-medium">
          Don{"'"}t just take our word for it
        </p>
      </div>
      <Review />
      <div className="text-center py-[70px] md:py-[100px] flex justify-center items-center flex-col">
        <h2 className="text-[35px] sm:text-[40px] lg:text-[50px] xl:text-[75px] leading-[1.2] font-black text-white">
          Book a Call
        </h2>
        <p className="text-base sm:text-xl xl:text-[26px] text-white font-medium">
          Some inspiring thing
        </p>
      </div>
    </>
  );
}
