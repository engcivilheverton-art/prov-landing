import Link from "next/link";
import { ROUTES } from "@/lib/landing-config";
import s from "./landing.module.css";

export default function FinalCta() {
  return (
    <section className={s.sec} style={{ paddingBottom: 0 }}>
      <div className={s.w}>
        <div className={s.cta} data-reveal>
          <h2>Comece hoje a transformar sua relação com o dinheiro.</h2>
          <p>Organize suas finanças, acompanhe seus resultados e construa um planejamento financeiro mais consciente.</p>
          <Link className={`${s.btn} ${s.bp}`} href={ROUTES.cadastro}>Criar conta grátis</Link>
        </div>
      </div>
    </section>
  );
}
