import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

function HeroSection() {
  const words = [
    { text: "Master" },
    { text: "your" },
    { text: "Journey" },
    { text: "to" },
    { text: "Musical", className: "text-blue-700 dark:text-blue-700" },
    { text: "Excellence" },
  ];

  return (
    <div className="w-full h-auto md:h-[40rem] flex flex-col items-center justify-center relative overflow-hidden sm:h-[40rem] py-10 mx-auto">
    {/* Spotlight for background effect */}
      <Spotlight className="-top-20 left-0 md:left-60 md:-top-10" fill="blue" />
    {/* Content container */}
    <div className="flex flex-col items-center justify-center pt-20 text-center space-y-4 md:space-y-6 px-4">
      <TypewriterEffectSmooth words={words} className=" md:text-4xl sm:text-3xl" />
    <p className="text-neutral-600 dark:text-neutral-200 text-sm px-2 sm:px-4 sm:text-base text-center md:text-left mt-40 md:mt-10 leading-relaxed">
      Start your journey to musical excellence today. Join our community of passionate musicians and creators. <br />
      Get access to exclusive courses, tools, and resources to help you grow your skills and achieve your goals. <br />
      Sign up now and take the first step towards mastering your craft.
    </p>
      {/* Buttons */}
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link href="/signup">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border border-neutral-200 dark:border-slate-800">
            Join Now
          </Button>
        </Link>
      </div>
    </div>
  </div>
  
  );
}

export default HeroSection;
