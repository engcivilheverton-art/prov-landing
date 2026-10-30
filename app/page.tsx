import type { Metadata } from "next";
import Landing from "@/components/landing/Landing";
import { SITE } from "@/lib/landing-config";

const title = "PROV. — Assuma o controle da sua vida financeira";
const description =
  "Organize receitas, despesas, cartões e objetivos financeiros em um só lugar e tome decisões melhores todos os dias.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: SITE.name,
    url: "/",
    images: [{ url: "/brand/logo-prov.png", width: 334, height: 225, alt: "PROV." }],
  },
  twitter: { card: "summary", title, description },
};

export default function HomePage() {
  return <Landing />;
}
