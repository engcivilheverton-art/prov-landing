import Link from "next/link";
import { APP_URL, planHref, ROUTES } from "@/lib/landing-config";
import s from "./landing.module.css";

type Plan = { id: "mensal" | "anual"; nome: string; valor: number; monthlyPrice: number; chargedTotal: number };
type PlansResponse = {
  plans: { mensal: Plan; anual: Plan };
  features: { free: string[]; premium: string[] };
};
const brl = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

async function carregarPlanos(): Promise<PlansResponse | null> {
  try {
    const response = await fetch(`${APP_URL}/api/billing/plans`, { cache: "no-store" });
    if (!response.ok) return null;
    return await response.json() as PlansResponse;
  } catch {
    return null;
  }
}

export default async function Pricing() {
  const data = await carregarPlanos();
  if (!data) {
    return (
      <section className={`${s.sec} ${s.alt}`} id="planos">
        <div className={s.w}>
          <div className={s.c}>
            <div className={s.eyebrow}>Planos</div>
            <h2>Escolha como usar a PROV.</h2>
            <p className={s.sub}>Os planos estarão disponíveis assim que o aplicativo estiver acessível.</p>
            <Link className={`${s.btn} ${s.bp}`} href={ROUTES.cadastro}>Criar conta grátis</Link>
          </div>
        </div>
      </section>
    );
  }

  const { mensal, anual } = data.plans;
  const economia = Math.max(0, mensal.chargedTotal * 12 - anual.chargedTotal);
  const percentual = mensal.chargedTotal > 0 ? Math.round((1 - anual.chargedTotal / (mensal.chargedTotal * 12)) * 100) : 0;
  return (
    <section className={`${s.sec} ${s.alt}`} id="planos">
      <div className={s.w}>
        <div className={s.c} data-reveal>
          <div className={s.eyebrow}>Planos</div>
          <h2>Escolha como usar a PROV.</h2>
          <p className={s.sub}>Comece grátis e faça upgrade quando quiser. O plano anual é cobrado a cada 12 meses.</p>
        </div>
        <div className={`${s.g3} ${s.pl}`}>
          <div className={s.cd} data-reveal>
            <h3>{mensal.nome}</h3>
            <div className={s.pr}>{brl(mensal.chargedTotal)}</div>
            <small style={{ color: "var(--mut)" }}>por mês</small>
            <ul>
              <li>{data.features.premium[0]}</li>
              <li>{data.features.premium[1]}</li>
              <li>{data.features.premium[2]}</li>
              <li>Pagamento recorrente mensal</li>
              <li>Cancelamento conforme as condições comerciais</li>
            </ul>
            <Link className={`${s.btn} ${s.bo}`} href={planHref("mensal")}>Assinar plano mensal</Link>
          </div>
          <div className={`${s.cd} ${s.hot}`} data-reveal>
            {percentual > 0 && <span className={s.bd}>Economize {percentual}%</span>}
            <h3>{anual.nome}</h3>
            <div className={s.pr}>{brl(anual.monthlyPrice)}</div>
            <small style={{ color: "var(--mut)" }}>por mês, com cobrança de {brl(anual.chargedTotal)} a cada 12 meses</small>
            <ul>
              <li>{data.features.premium[0]}</li>
              <li>{data.features.premium[1]}</li>
              <li>{data.features.premium[2]}</li>
              <li>Pagamento recorrente anual</li>
              <li>Economia de {brl(economia)} por ano em relação ao plano mensal</li>
            </ul>
            <Link className={`${s.btn} ${s.bp}`} href={planHref("anual")}>Assinar plano anual</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
