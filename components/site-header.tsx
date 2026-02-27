"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" data-compact={isCompact}>
      <div className="site-header-shell">
        <a href="#inicio" className="brand" aria-label="Inicio">
          <Image
            src="/logo-placeholder-removebg-preview.png"
            alt="Afazio"
            width={210}
            height={102}
            className="brand-logo"
            priority
          />
        </a>

        <nav className="nav" aria-label="Principal">
          <a href="#perfil">Perfil</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="header-actions">
          <a className="header-link" href="#contacto">
            Consultar
          </a>
        </div>
      </div>
    </header>
  );
}
