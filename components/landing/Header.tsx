"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { ROUTES } from "@/lib/landing-config";
import s from "./landing.module.css";

const LINKS = [
  ["#inicio", "Início"],
  ["#funcionalidades", "Funcionalidades"],
  ["#como-funciona", "Como funciona"],
  ["#planos", "Planos"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className={`${s.w} ${s.nav}`}>
        <a href="#inicio" aria-label="PROV. início"><Logo priority /></a>
        <nav className={`${s.links} ${open ? s.open : ""}`} aria-label="Principal">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className={s.act}>
          <Link className={`${s.btn} ${s.bo} ${s.bs}`} href={ROUTES.login}>Entrar</Link>
          <Link className={`${s.btn} ${s.bp} ${s.bs}`} href={ROUTES.cadastro}>Começar gratuitamente</Link>
          <button className={s.mb} aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
