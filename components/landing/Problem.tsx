import Icon, { IconName } from "./Icon";
import s from "./landing.module.css";

const ITEMS: [IconName, string, string][] = [
  ["search", "Para onde o dinheiro vai?", "Não saber exatamente para onde o dinheiro está indo."],
  ["card", "Contas e cartões fora de controle", "Perder o controle das contas e dos cartões."],
  ["goal", "Objetivos sem plano", "Ter dificuldade para planejar objetivos financeiros."],
];

export default function Problem() {
  return (
    <section className={`${s.sec} ${s.alt}`}>
      <div className={s.w}>
        <div className={s.c} data-reveal>
          <div className={s.eyebrow}>O problema</div>
          <h2>Seu dinheiro merece mais organização.</h2>
        </div>
        <div className={s.g3}>
          {ITEMS.map(([icon, title, text]) => (
            <div key={title} className={s.cd} data-reveal>
              <div className={s.ic}><Icon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className={s.sol} data-reveal>
          <h3>A PROV. centraliza tudo e facilita o acompanhamento das suas finanças.</h3>
          <div className={s.chips}><span>Receitas</span><span>Despesas</span><span>Cartões</span><span>Metas</span></div>
        </div>
      </div>
    </section>
  );
}
