import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import './globals.css';
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumera - Energia Sustentável para um Futuro Justo",
  description:
    "Microgrids comunitários que utilizam energia solar e eólica para fornecer eletricidade limpa e acessível",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${archivo.variable}`}>
      <body className="bg-background-white text-text-body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}