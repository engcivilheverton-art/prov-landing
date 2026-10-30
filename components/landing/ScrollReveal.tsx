"use client";
import { useEffect } from "react";
import s from "./landing.module.css";

/** Animação discreta de entrada. Sem JavaScript, todo o conteúdo continua visível. */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-prov]");
    if (!root) return;
    root.setAttribute("data-js", "");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(s.in);
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
