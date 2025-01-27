'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from 'next/link';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("absolute top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <Link href={"/"}>
      <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
          </Link>
        <Link href={"/services"}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/music-production">Music Production</HoveredLink>
            <HoveredLink href="/sound-engineering">Sound Engineering</HoveredLink>
            <HoveredLink href="/artist-management">Artist Management</HoveredLink>
            <HoveredLink href="/music-marketing">Music Marketing</HoveredLink>
          </div>
        </MenuItem>
        </Link>
        <Link href={"/courses"}>
        <MenuItem
            setActive={setActive} active={active} item="Courses">
               <div className="flex flex-col space-y-4 text-sm">
               <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/courses">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">
              Music Production
            </HoveredLink>
               </div>
            </MenuItem>
            </Link>
            <Link href={"/about"}>
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/our-story">Our Story</HoveredLink>
                <HoveredLink href="/team">Our Team</HoveredLink>
                <HoveredLink href="/mission">Our Mission</HoveredLink>
                <HoveredLink href="/careers">Careers</HoveredLink>
              </div>
            </MenuItem>
            </Link>
        <Link href={"./contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
            
            </MenuItem>
            </Link>
      </Menu>
    </div>
  );
}

export default Navbar;