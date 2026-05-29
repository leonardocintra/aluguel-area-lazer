"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-md bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md dark:shadow-none"
          : "bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md shadow-sm dark:shadow-none"
      }`}
    >
      <div className="max-w-container-max-width mx-auto px-margin-desktop flex justify-between items-center h-20">
        <Link href="#" className="font-display-lg text-headline-sm text-primary dark:text-primary-fixed-dim tracking-tight">
          VerdeLuxo Eventos
        </Link>
        <div className="hidden md:flex gap-gutter items-center">
          <Link href="#galeria" className="text-on-surface-variant dark:text-on-surface-variant/80 font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-300">
            Galeria
          </Link>
          <Link href="#beneficios" className="text-on-surface-variant dark:text-on-surface-variant/80 font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-300">
            Benefícios
          </Link>
          <Link href="#estrutura" className="text-on-surface-variant dark:text-on-surface-variant/80 font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-300">
            Estrutura
          </Link>
          <Link href="#depoimentos" className="text-on-surface-variant dark:text-on-surface-variant/80 font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-300">
            Depoimentos
          </Link>
          <Link href="#localizacao" className="text-on-surface-variant dark:text-on-surface-variant/80 font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed-dim transition-colors duration-300">
            Localização
          </Link>
          <Link href="#reserva" className="bg-tertiary-container text-on-tertiary-container px-6 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center gap-2 ml-4">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
            Reservar via WhatsApp
          </Link>
        </div>
        <button className="md:hidden text-primary p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
