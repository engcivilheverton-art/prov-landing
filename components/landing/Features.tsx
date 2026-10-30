import Icon, { IconName } from "./Icon";
import s from "./landing.module.css";

const FEATURES: [IconName, string, string][] = [
  ["dash", "Dashboard financeiro", "Visão geral da saúde financeira."],
  ["swap", "Receitas e despesas", "Acompanhe todas as movimentações."],
  ["card", "Gestão de cartões", "Organize limites, compras e faturas."],
  ["cal", "Planejamento mensal", "Estabeleça limites de gastos por categoria."],
  ["goal", "Metas financeiras", "Acompanhe seus objetivos."],
  ["bar", "Relatórios", "Visualize gráficos e indicadores."],
  ["rep", "Lançamentos recorrentes", "Organize contas e receitas periódicas."],
  ["tag", "Categorias personalizadas", "Adapte o controle à sua realidade."],
];

export default function Features() {
  return (
    <section className={s.sec} id="funcionalidades">
      <div className={s.w}>
        <div className={s.c} data-reveal>
          <div className={s.eyebrow}>Funcionalidades</div>
          <h2>Tudo o que você precisa para organizar o dinheiro.</h2>
          <p className={s.sub}>Recursos pensados para o dia a dia, de forma simples e visual.</p>
        </div>
        <div className={s.g4}>
          {FEATURES.map(([icon, title, text]) => (
            <div key={title} className={s.cd} data-reveal>
              <div className={s.ic}><Icon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
