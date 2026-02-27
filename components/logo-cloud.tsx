"use client";

import { useEffect, useRef, useState } from "react";

type LogoCloudProps = {
  title?: string;
  subtitle?: string;
  logos: string[];
  embedded?: boolean;
  ariaLabel?: string;
};

export function LogoCloud({
  title = "Empresas y equipos acompañados",
  subtitle = "Espacio para mostrar marcas con las que trabajó en capacitaciones de inglés corporativo.",
  logos,
  embedded = false,
  ariaLabel = "Marcas y empresas",
}: LogoCloudProps) {
  const marqueeLogos = [...logos, ...logos];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(30);
  const targetSpeedRef = useRef(30);
  const loopWidthRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    targetSpeedRef.current = isHovered ? 12 : 30;
  }, [isHovered]);

  useEffect(() => {
    if (!trackRef.current) return;
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      trackRef.current.style.transform = "translate3d(0, 0, 0)";
      return;
    }

    const node = trackRef.current;

    const measure = () => {
      loopWidthRef.current = node.scrollWidth / 2;
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(node);

    const tick = (ts: number) => {
      if (!trackRef.current) return;

      const last = lastTsRef.current ?? ts;
      const dt = Math.min((ts - last) / 1000, 0.05);
      lastTsRef.current = ts;

      speedRef.current += (targetSpeedRef.current - speedRef.current) * Math.min(1, dt * 6);
      offsetRef.current += speedRef.current * dt;

      const loopWidth = loopWidthRef.current;
      if (loopWidth > 0 && offsetRef.current >= loopWidth) {
        offsetRef.current -= loopWidth;
      }

      trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      lastTsRef.current = null;
    };
  }, []);

  const marquee = (
    <div
      className="marquee-wrap"
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="marquee-track" ref={trackRef}>
        {marqueeLogos.map((logo, index) => (
          <div
            className="logo-pill"
            key={`${logo}-${index}`}
            aria-hidden={index >= logos.length}
          >
            <span>{logo}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (embedded) {
    return <div className="logo-cloud-inline">{marquee}</div>;
  }

  return (
    <section
      id="empresas"
      className="panel logo-cloud reveal"
      aria-labelledby="logo-cloud-title"
    >
      <div className="section-shell">
        <div className="eyebrow">Empresas</div>
        <div className="section-head">
          <div>
            <h2 id="logo-cloud-title" className="section-title">
              {title}
            </h2>
            <p className="section-copy">{subtitle}</p>
          </div>
        </div>

        {marquee}
      </div>
    </section>
  );
}
