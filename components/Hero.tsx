import { FaDownload } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";


import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import { socialMedia } from "@/data";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <p className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Hi, I'm Mohiuddin, a Next/React js Developer"
            className="text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-12">
            Transforming ideas into reality through innovative web development.
          </p>

          {/* <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a> */}
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <Link
                href={info.link}
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className="">
            <Image
              src="/headShot.jpg"
              className="rounded-full mx-auto "
              width={300}
              height={300}
              alt="hero"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mt-12 md:mt-0">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/163gBBaat3VjuNW-PtQZXWT0zqmtboODs/view"
            >
              <MagicButton
                title="Download Resume"
                icon={<FaDownload />}
                position="left"
              />
            </a>
            <a
              target="_blank"
              href="https://calendly.com/mohiuddin200/consulting-about-custom-website-building"
            >
              <MagicButton
                title="Schedule a meeting"
                icon={<FaCalendarAlt />}
                position="right"
              />
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
