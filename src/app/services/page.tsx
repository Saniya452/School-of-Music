'use client';
import React from 'react'
import { HeroParallax } from '../components/ui/hero-parallax';
import { motion } from "framer-motion";
import { LampContainer } from '../components/ui/lamp';

function services() {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "/courses/Blues.jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "/courses/vocal.jpg",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "/courses/drummers.jpg",
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "/courses/jazz music.jpg",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "/courses/classical-music.jpg",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "/courses/music-production.jpg",
    },
   
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "/courses/song-writers.jpg",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "/courses/guitar.jpg",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "/courses/jazz-improvisation.jpg",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "/courses/music-prod.jpg",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "/courses/piano.jpg",
    },
   
    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "/courses/vocalists.jpg",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "/courses/drumming.jpg",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "/courses/song-writing.jpg",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "/courses/jazz.jpg",
    },
];
// console.log(products);

  return (
  <>
  <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroParallax products={products} />
  </div>
  <div className="bg-black/[0.96] antialiased bg-grid-white/[0.01]">
    <LampContainer className="relative pb-20"> 
        <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Join Our<br/>Community Today!
        </motion.h1>
    </LampContainer>
  </div>
  </>
  )
}

export default services;





