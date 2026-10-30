import Link from "next/link";
import { PLANS, annualSavings, brl, planHref } from "@/lib/landing-config";
import s from "./landing.module.css";

export default function Pricing() {
  const save = annualSavings();
  const { mensal, anual } = PLANS;
  return (
    <section className={`${s.sec} ${s.alt}`} id="planos">
      <div className={s.w}>
        <div className={s.c} data-reveal>
          <div className={s.eyebrow}>Planos</div>
          <h2>Escolha como usar a PROV.</h2>
          <p className={s.sub}>Pague todo mês ou economize com o pagamento único anual.</p>
        </div>
        <div className={`${s.g3} ${s.pl}`}>
          <div className={s.cd} data-reveal>
            <h3>{mensal.name}</h3>
            <div className={s.pr}>{brl(mensal.monthlyPrice)}</div>
            <small style={{ color: "var(--mut)" }}>por mês</small>
            <ul>
              <li>Acesso aos recursos do plano contratado</li>
              <li>Pagamento mensal</li>
              <li>Cancelamento conforme as condições comerciais</li>
            </ul>
            <Link className={`${s.btn} ${s.bo}`} href={planHref("mensal")}>Assinar plano mensal</Link>
          </div>
          <div className={`${s.cd} ${s.hot}`} data-reveal>
            {save.percent > 0 && <span className={s.bd}>Economize {save.percent}%</span>}
            <h3>{anual.name}</h3>
            <div className={s.pr}>{brl(anual.monthlyPrice)}</div>
            <small style={{ color: "var(--mut)" }}>
              por mês, em pagamento único de {brl(anual.chargedTotal ?? anual.monthlyPrice * 12)} por ano
            </small>
            <ul>
              <li>Acesso aos recursos do plano contratado</li>
              <li>Pagamento anual</li>
              <li>Economia de {brl(save.amount)} por ano em relação ao plano mensal</li>
            </ul>
            <Link className={`${s.btn} ${s.bp}`} href={planHref("anual")}>Assinar plano anual</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
