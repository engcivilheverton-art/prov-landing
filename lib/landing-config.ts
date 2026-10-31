/** Rotas do app financeiro, hospedado separadamente da landing. */
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "https://prov-financeiro.vercel.app").replace(/\/$/, "");

export const ROUTES = {
  login: `${APP_URL}/login`,
  cadastro: `${APP_URL}/login?modo=criar`,
  dashboard: `${APP_URL}/dashboard`,
  privacidade: "/privacidade",
  termos: "/termos",
} as const;

export type PlanId = "mensal" | "anual";

export interface Plan {
  id: PlanId;
  name: string;
  /** Preço por mês, em reais. */
  monthlyPrice: number;
  /** Valor cobrado de uma vez (apenas plano anual). */
  chargedTotal: number | null;
}

/** Valores dos planos: edite aqui. */
export const PLANS: Record<PlanId, Plan> = {
  mensal: { id: "mensal", name: "Plano mensal", monthlyPrice: 11.99, chargedTotal: null },
  anual: { id: "anual", name: "Plano anual", monthlyPrice: 9.99, chargedTotal: 119.88 },
};

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function annualSavings() {
  const monthlyYear = PLANS.mensal.monthlyPrice * 12;
  const annualYear = PLANS.anual.chargedTotal ?? PLANS.anual.monthlyPrice * 12;
  return {
    amount: Math.round((monthlyYear - annualYear) * 100) / 100,
    percent: Math.round((1 - annualYear / monthlyYear) * 100),
  };
}

/** O app recebe o plano escolhido, autentica o cliente e abre o checkout do Mercado Pago. */
export const planHref = (plan: PlanId) => `${ROUTES.cadastro}&plano=${plan}`;

export const SITE = {
  name: "PROV.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
};
