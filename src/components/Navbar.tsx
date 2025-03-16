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
    <nav className="w-full max-w-7xl mx-auto grid grid-flow-col grid-cols-[0.3fr_1fr_0.3fr] px-10 py-5 items-start justify-center">
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
      <div className="nav-pages flex gap-8 justify-center flex-grow">
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
