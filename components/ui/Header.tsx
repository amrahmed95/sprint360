"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Button from "./Button";
import React, { useState, useEffect } from "react";
import { LanguageSwitcher } from "../language-switcher";

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[--color-card]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 @sm:px-6 @lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-8 h-8 @md:w-10 @md:h-10 flex-shrink-0">
            <img
              src="/logos/logo.png"
              alt="Sprint 360 Logo"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <span className="font-semibold text-white text-sm @md:text-base tracking-tight whitespace-nowrap">
            Sprint 360
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col w-10 h-10 justify-center items-center rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
              isMenuOpen ? "opacity-0 -translate-x-3" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 mt-1.5 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 @lg:space-x-6 xl:space-x-8 text-sm">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative transition-colors duration-200 px-2 py-1.5 rounded-lg",
                  isActive
                    ? "text-[--color-accent] font-medium bg-white/5"
                    : "text-[--color-muted] hover:text-[--color-accent-hover] hover:bg-white/5"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button and Language Switcher */}
        <div className="hidden md:flex items-center space-x-3 @lg:space-x-4">
          <Button variant="primary" onClick={() => router.push("/contact")}>
            <span>Request for Proposal</span>
          </Button>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Navigation Menu - Now uses transform instead of max-height */}
      <div
        className={`md:hidden w-full bg-[--color-card] border-t border-white/5 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible"
        }`}
        style={{
          position: isMenuOpen ? "relative" : "absolute",
          top: isMenuOpen ? "0" : "-100%",
        }}
      >
        <div className="px-4 py-4 space-y-1">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base rounded-lg transition-colors duration-200 border-b border-white/5 last:border-b-0",
                    isActive
                      ? "text-[--color-accent] font-medium bg-white/5"
                      : "text-[--color-muted]",
                    "hover:text-[--color-accent-hover] hover:bg-white/5"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile CTA and Language Switcher */}
          <div className="pt-4 px-4 space-y-4">
            <Button
              variant="primary"
              fullWidth
              onClick={() => {
                router.push("/contact");
                setIsMenuOpen(false);
              }}
            >
              <span>Request for Proposal</span>
            </Button>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
