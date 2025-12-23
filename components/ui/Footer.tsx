import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10 text-[--color-muted] text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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

          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-[--color-accent]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[--color-accent]">
              About Us
            </Link>
            <Link href="/services" className="hover:text-[--color-accent]">
              Services
            </Link>
            <Link href="/blog" className="hover:text-[--color-accent]">
              Blogs
            </Link>
            <Link href="/contact" className="hover:text-[--color-accent]">
              Contact
            </Link>
          </nav>

          <p className="text-sm text-[--color-muted] flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
            <span>&copy; {new Date().getFullYear()} Sprint 360</span>
            <span className="hidden sm:inline">|</span>
            <span>All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
