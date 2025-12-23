"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Button from "./Button";
import React from "react";
import { LanguageSwitcher } from "../language-switcher";

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    // { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-transparent backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-10 h-10 flex-shrink-0">
            <img
              src="/logos/logo.png"
              alt="Sprint 360 Logo"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <span className="font-semibold text-white text-base tracking-tight whitespace-nowrap">
            Sprint 360
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative transition-colors duration-200",
                  isActive
                    ? "text-[--color-accent] font-medium"
                    : "text-[--color-muted]",
                  // Hover color from globals.css
                  "hover:text-[--color-accent-hover]"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button and Language Switcher */}
        <div className="hidden md:flex items-center space-x-4">
          <Button>
            <span onClick={() => router.push("/contact")}>
              Request for Proposal
            </span>
          </Button>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
