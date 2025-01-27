"use client";
import React from "react";
import { Boxes } from "@/app/components/ui/background-boxes";
import { cn } from "@/app/utils/cn";
import MusicSchoolTestimonials from "../components/TestimonialCards";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Carousel } from "../components/ui/carousel";

export default function about() {
  const words = `Music is the language of the soul, and here at our school,
   we help you find your voice. From the first note to the grand performance, 
   we believe in creating a space where creativity thrives.
   Whether you’re learning for fun or chasing a dream, this is your place to grow, explore, 
   and harmonize with your passion.
   Welcome to the journey of a lifetime—where every beat counts.`;

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Michael Rodriguez",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: " Sarah Chen",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "John Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Mark Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const slideData = [
    {
      title: "Guitar Techniques",
      button: "Explore more",
      src: "https://play-guitars.com/wp-content/uploads/2019/06/the-top-6-techniques-for-practising-acoustic-guitar-01-1.jpg",
    },
    {
      title: "Piano Masterclass",
      button: "Explore more",
      src: "https://millersmusic.co.uk/cdn/shop/articles/Blog_Image_41.png?v=1681390831",
    },
    {
      title: "Songwriting Workshop",
      button: "Explore more",
      src: "https://images.squarespace-cdn.com/content/v1/5eebd0bfe16a2255956188a3/1609334261268-7VLNLLTE4UJ347YLZ1OV/guitar+notebook+songwriting.jpg",
    },
    {
      title: "Drumming Lessons",
      button: "Explore more",
      src: "https://media.istockphoto.com/id/1194155480/photo/the-drummer-plays-the-drums-beautiful-blue-and-red-background-with-rays-of-light-beautiful.jpg?s=612x612&w=0&k=20&c=O61bu1dvn5bmMjigqYw-tTjAMc59lPTkhiR_V79itZI=",
    },
    {
      title: "Vocal Training",
      button: "Explore more",
      src: "https://cdn.shopify.com/s/files/1/0993/3800/files/mic_nice_1024x1024.jpg?v=1546084354",
    },
    {
      title: "Music Production",
      button: "Explore more",
      src: "https://abbeyroadinstitute.com.au/wp-content/uploads/sites/8/2021/08/music-producer-studio-course.jpg",
    },
  ];
  return (
    <>  
    <div className="h-96  w-full bg-black  flex flex-col items-center justify-center">
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <h1 className="lg:mt-40 md:mt-0 sm:mt-2 text-4xl md:text-5xl font-bold text-white">
        Discover the Joy of Music
      </h1>
      <p className="text-center mt-2 text-white relative z-20">
        We are the best music school in the world. <br/>
        We have the best teachers and the best students.
        <br/> We have the best music. We have the best everything.
      </p>
       </div>
       <div className="p-30 bg-black grid grid-cols-2 items-right">
          <AnimatedTestimonials testimonials={testimonials} /> 
          <div className="p-10 mt-6" >
          <TextGenerateEffect words={words} />
          </div> 
       </div>
       <div className="relative overflow-hidden w-full h-full py-20 bg-gray-900">
      <Carousel slides={slideData} />
    </div>
       <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.1] relative flex flex-col items-center justify-center overflow-hidden">
              <h2 className="md:text-5xl  font-bold mb-12 md:mt-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Discover Your Voice: Where Every Beat Counts                </h2>
              <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                  <div className="w-full max-w-6xl">
                  <TextGenerateEffect words={words} />
                  </div>
              </div>
          </div>
          </>

 );
}

