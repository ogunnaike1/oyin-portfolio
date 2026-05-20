"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const vh = window.innerHeight;
    const targets = document.querySelectorAll<HTMLElement>(".reveal, .mask-reveal");

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

    targets.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95) {
        requestAnimationFrame(() => el.classList.add("in-view"));
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, []);

  return null;
}
