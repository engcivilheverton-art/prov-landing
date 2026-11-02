/** A landing encaminha ao app; não autentica usuários nem processa pagamentos. */
export const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000').replace(/\/$/, '');
export const SITE = {
  name: 'PROV.',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://prov-landing.vercel.app').replace(/\/$/, ''),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
} as const;

export const ROUTES = {
  login: `${APP_URL}/login`,
  cadastro: `${APP_URL}/cadastro`,
  dashboard: `${APP_URL}/dashboard`,
  privacidade: '/privacidade',
  termos: '/termos',
} as const;

export type PlanId = 'mensal' | 'anual';
export const planHref = (plan: PlanId) => `${ROUTES.cadastro}?plano=${plan}`;
