"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

type AnimatedQuoteProps = {
  text: string;
  className?: string;
};

export function AnimatedQuote({ text, className }: AnimatedQuoteProps) {
  const [isActive, setIsActive] = useState(false);
  const quoteRef = useRef<HTMLQuoteElement | null>(null);
  const chars = Array.from(text);

  useEffect(() => {
    const target = quoteRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <blockquote
      ref={quoteRef}
      className={`${className ?? ""} ${isActive ? "is-active" : ""}`.trim()}
      aria-label={text}
    >
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="quote-char"
          style={{ "--char-index": index } as CSSProperties}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </blockquote>
  );
}
