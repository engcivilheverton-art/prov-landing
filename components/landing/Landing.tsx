import { Inter } from "next/font/google";
import Header from "./Header";
import Hero from "./Hero";
import Problem from "./Problem";
import Features from "./Features";
import Demo from "./Demo";
import Steps from "./Steps";
import Pricing from "./Pricing";
import Security from "./Security";
import Faq from "./Faq";
import FinalCta from "./FinalCta";
import Footer from "./Footer";
import ScrollReveal from "./ScrollReveal";
import s from "./landing.module.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

/** Página pública de vendas. Não depende de autenticação nem altera o dashboard. */
export default function Landing() {
  return (
    <div className={`${inter.className} ${s.prov}`} data-prov>
      <style>{"html{scroll-behavior:smooth;scroll-padding-top:88px}@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}"}</style>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Demo />
        <Steps />
        <Pricing />
        <Security />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
