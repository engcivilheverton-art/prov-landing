import s from "./landing.module.css";

export const FAQ: [string, string][] = [
  ["Como funciona o aplicativo?", "Você cadastra suas receitas, despesas e cartões e acompanha tudo em painéis e relatórios."],
  ["Preciso instalar algum programa?", "Não. A PROV. é um aplicativo web, acessado pelo navegador."],
  ["Posso acessar pelo celular?", "Sim. A página e o aplicativo são pensados para funcionar em computador, tablet e celular."],
  ["Posso cadastrar vários cartões?", "Sim. Você pode organizar limites, compras e faturas dos seus cartões."],
  ["Como funciona a assinatura?", "Há plano mensal e plano anual, com pagamento único. As condições são informadas antes da contratação."],
  ["Posso cancelar minha assinatura?", "Sim, conforme as condições comerciais do plano contratado."],
  ["Meus dados ficam protegidos?", "Cada usuário acessa apenas a sua conta, e a política de privacidade explica como os dados são tratados."],
  ["Existe integração automática com bancos?", "Não. O controle inicial é feito por lançamentos manuais."],
];

export default function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  return (
    <section className={`${s.sec} ${s.alt}`}>
      <div className={s.w}>
        <div className={s.c} data-reveal>
          <div className={s.eyebrow}>Perguntas frequentes</div>
          <h2>Tire suas dúvidas.</h2>
        </div>
        <div className={s.fq}>
          {FAQ.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
