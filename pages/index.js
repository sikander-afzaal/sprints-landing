import Head from "next/head";
import { Raleway } from "next/font/google";
import Hero from "@/components/landing/Hero";
import Idea from "@/components/landing/Idea";
import Software from "@/components/landing/Software";
import Journey from "@/components/landing/Journey";
import Review from "@/components/landing/Review";
import Book from "@/components/landing/Book/Book";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <div style={styles}>
      <style jsx global>
        {`
          :root {
            --raleway-font: ${raleway.style.fontFamily};
          }
        `}
      </style>

      <Head>
        <title>Sprints | MVP Development</title>
        <meta name="description" content="Launch your startup idea with Sprints. We provice Top-quality MVP software development solutions.Book a call today and let's turn your vision into a reality!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Idea />
      <Software />
      <Journey />
      <div data-name="Clients Reviews" id="reviews" className="w-full">
        <div className="text-center py-[70px] md:py-[100px] flex justify-center items-center flex-col">
          <h2 className="text-[35px] sm:text-[40px]  leading-[1.2] font-black text-white">
            Clients Reviews
          </h2>
          <p className="text-base sm:text-xl  text-white font-medium">
            Satisfied customers
          </p>
        </div>
        <Review />
      </div>
      <div className="z-11 text-center py-[70px] md:py-[100px] flex justify-center items-center flex-col">
        <h2 className="text-[35px] sm:text-[40px] leading-[1.2] font-black text-white">
          Book a Call
        </h2>
        <p className="text-base sm:text-xl  text-white font-medium">
          Let{"'"}s talk
        </p>
      </div>
      <Book />
    </div>
  );
}

const styles = {
  // width: '100vw',
  maxWidth: '100vw',
  overflow: 'hidden'
}
