import s from "./landing.module.css";

const STEPS = [
  ["Crie sua conta", "Cadastre-se em poucos minutos para começar."],
  ["Cadastre receitas e despesas", "Registre suas movimentações e organize por categorias."],
  ["Acompanhe e organize objetivos", "Veja seus resultados e organize suas metas."],
];

export default function Steps() {
  return (
    <section className={s.sec} id="como-funciona">
      <div className={s.w}>
        <div className={s.c} data-reveal>
          <div className={s.eyebrow}>Como funciona</div>
          <h2>Simples de começar.</h2>
        </div>
        <div className={`${s.g3} ${s.st}`}>
          {STEPS.map(([title, text]) => (
            <div key={title} className={s.cd} data-reveal><h3>{title}</h3><p>{text}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
