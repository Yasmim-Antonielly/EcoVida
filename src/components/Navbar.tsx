"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/problematica", label: "Sobre a Problemática" },
    { href: "/solucao", label: "Nossa Solução" },
    { href: "/impacto", label: "Impacto Social e Ambiental" },
    { href: "/apoie", label: "Apoie" },
  ];

  return (
    <nav className="w-full max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo.svg"
              alt="Lumera Logo"
              width={41}
              height={24}
            />
            <Image
              src="/assets/logo-text.svg"
              alt="Lumera Logo Texto"
              width={98}
              height={23}
            />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-black no-underline hover:underline ${
              pathname === link.href ? "text-brand-primary font-medium" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
