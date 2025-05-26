"use client";
import {
  Navbar as NavbarComponent,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/navbar";
import { useState } from "react";

const navigationItems = [
  { name: "Home", link: "/" },
  { name: "Courses", link: "/courses" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavbarComponent>
      <NavBody>
        <NavbarLogo />
        <NavItems items={navigationItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="secondary" href="/login">
            Login
          </NavbarButton>
          <NavbarButton href="/signup">Sign Up</NavbarButton>
        </div>
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex w-full flex-col gap-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-lg font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-4">
              <NavbarButton
                variant="secondary"
                href="/login"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </NavbarButton>
              <NavbarButton
                href="/signup"
                className="w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavbarComponent>
  );
}