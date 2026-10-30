import Link from "next/link";

export const metadata = { title: "Termos de uso — PROV." };

// Página provisória: substitua pelo texto jurídico definitivo.
export default function Page() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "96px 24px", fontFamily: "system-ui, sans-serif" }}>
      <h1>Termos de uso</h1>
      <p>Conteúdo em elaboração.</p>
      <Link href="/">Voltar ao início</Link>
    </main>
  );
}
