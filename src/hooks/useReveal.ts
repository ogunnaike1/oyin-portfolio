"use client";
import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(".reveal, .mask-reveal, .ana-card");
    const vh = window.innerHeight;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((t) => {
      const r = t.getBoundingClientRect();
      if (r.top < vh * 0.95) {
        requestAnimationFrame(() => t.classList.add("in-view"));
      } else {
        io.observe(t);
      }
    });

    return () => io.disconnect();
  }, []);

  return ref;
}
