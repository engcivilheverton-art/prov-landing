import Link from "next/link";
import Logo from "./Logo";
import { ROUTES, SITE } from "@/lib/landing-config";
import s from "./landing.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={s.w}>
        <div className={s.fg}>
          <div>
            <Logo />
            <p style={{ marginTop: 14 }}>Aplicativo web de gestão financeira pessoal para organizar receitas, despesas, cartões e metas.</p>
          </div>
          <div>
            <h4>Produto</h4>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#planos">Planos</a>
          </div>
          <div>
            <h4>Legal</h4>
            <Link href={ROUTES.privacidade}>Política de privacidade</Link>
            <Link href={ROUTES.termos}>Termos de uso</Link>
            {SITE.contactEmail && <a href={`mailto:${SITE.contactEmail}`}>Contato</a>}
          </div>
        </div>
        <div className={s.cp}>© {new Date().getFullYear()} PROV. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
