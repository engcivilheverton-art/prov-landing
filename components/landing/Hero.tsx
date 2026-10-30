import Link from "next/link";
import DashboardMock from "./DashboardMock";
import { ROUTES } from "@/lib/landing-config";
import s from "./landing.module.css";

export default function Hero() {
  return (
    <section className={s.hero} id="inicio">
      <div className={`${s.w} ${s.hg}`}>
        <div data-reveal>
          <div className={s.eyebrow}>Gestão financeira pessoal</div>
          <h1>Assuma o <em>controle</em> da sua vida financeira.</h1>
          <p>Organize suas receitas, despesas, cartões e objetivos financeiros em um só lugar. Tenha clareza sobre seu dinheiro e tome decisões melhores todos os dias.</p>
          <div className={s.bt}>
            <Link className={`${s.btn} ${s.bp}`} href={ROUTES.cadastro}>Começar gratuitamente</Link>
            <a className={`${s.btn} ${s.bo}`} href="#funcionalidades">Conhecer funcionalidades</a>
          </div>
        </div>
        <div data-reveal><DashboardMock /></div>
      </div>
    </section>
  );
}
