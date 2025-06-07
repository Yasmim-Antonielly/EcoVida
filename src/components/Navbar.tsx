"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mvp", label: "Projeto" },
    { href: "/impacto", label: "Impacto Social e Ambiental" },
    { href: "/proximos-passos", label: "Próximos Passos" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full max-w-[1440px] mx-auto px-6 py-4 bg-navbar-background transition-colors">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              alt="Guardiã Natural Logo"
              width={158}
              height={98}
            />
          </div>
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-text-headers no-underline hover:underline transition-colors ${pathname === link.href ? "text-brand-primary font-medium" : ""
                }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Botões para mobile */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-text-headers rounded-md"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 bg-navbar-background transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-text-headers no-underline px-4 py-2 rounded-md transition-colors ${pathname === link.href
                    ? "bg-background-silver text-brand-primary font-medium"
                    : ""
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;