"use client";
import { useState } from "react";
import DashboardMock from "./DashboardMock";
import s from "./landing.module.css";

const TABS = ["Dashboard", "Lançamentos", "Cartões", "Relatórios"];

const ENTRIES: [string, string, string, boolean][] = [
  ["Aluguel", "05/10 · Moradia", "− R$ 1.450,00", false],
  ["Salário", "05/10 · Receita", "+ R$ 5.200,00", true],
  ["Farmácia", "08/10 · Saúde", "− R$ 86,40", false],
  ["Freelance", "12/10 · Receita", "+ R$ 1.000,00", true],
  ["Transporte", "14/10 · Mobilidade", "− R$ 120,00", false],
];

const CARDS: [string, string, string, number][] = [
  ["Cartão Azul", "R$ 1.280,00", "linear-gradient(135deg,#142B4A,#3D5675)", 42],
  ["Cartão Verde", "R$ 640,00", "linear-gradient(135deg,#047857,#10B981)", 26],
  ["Cartão Cinza", "R$ 310,00", "linear-gradient(135deg,#55677F,#A9C4DC)", 15],
];

const BARS = [45, 62, 50, 78, 58, 70, 48, 84];

/** Telas ilustrativas. Troque pelas capturas reais do app (ex.: <Image src="/screens/dashboard.png" ... />). */
export default function Demo() {
  const [tab, setTab] = useState(0);
  return (
    <section className={`${s.sec} ${s.alt}`}>
      <div className={s.w}>
        <div className={s.c} data-reveal>
          <div className={s.eyebrow}>Demonstração</div>
          <h2>Conheça o aplicativo por dentro.</h2>
          <p className={s.sub}>Telas ilustrativas com dados fictícios.</p>
        </div>
        <div className={s.tabs} role="tablist">
          {TABS.map((t, i) => (
            <button key={t} role="tab" aria-selected={tab === i} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>
        <div className={`${s.pn} ${s.on}`}>
          {tab === 0 && <DashboardMock />}
          {tab === 1 && (
            <div className={s.win}><div className={s.bx}>
              <h4>Lançamentos de outubro</h4>
              {ENTRIES.map(([name, meta, value, income]) => (
                <div key={name} className={s.tr}><div>{name}<span>{meta}</span></div><b className={income ? s.up : s.dn}>{value}</b></div>
              ))}
            </div></div>
          )}
          {tab === 2 && (
            <div className={s.win}><div className={s.g3} style={{ margin: 0 }}>
              {CARDS.map(([name, bill, bg, pct]) => (
                <div key={name} className={s.cc} style={{ background: bg }}>
                  <b>{name}</b>
                  <div><small>Fatura atual</small><div style={{ fontSize: "1.4rem", fontWeight: 700 }}>{bill}</div></div>
                  <div className={s.pb}><i style={{ width: `${pct}%` }} /></div>
                </div>
              ))}
            </div></div>
          )}
          {tab === 3 && (
            <div className={s.win}><div className={s.bx}>
              <h4>Despesas dos últimos 8 meses</h4>
              <div className={s.bars}>{BARS.map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
            </div></div>
          )}
        </div>
      </div>
    </section>
  );
}
