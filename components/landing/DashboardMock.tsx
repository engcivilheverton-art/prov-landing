import s from "./landing.module.css";

/** Ilustração do painel com dados fictícios. Substitua por captura real quando disponível. */
export default function DashboardMock() {
  return (
    <div className={s.win} role="img" aria-label="Exemplo ilustrativo do painel financeiro">
      <div className={s.wh}><i /><i /><i /></div>
      <div className={s.kp}>
        <div className={`${s.k} ${s.m}`}><small>Saldo total</small><b>R$ 12.480,00</b></div>
        <div className={s.k}><small>Receitas do mês</small><b className={s.up}>R$ 6.200</b></div>
        <div className={s.k}><small>Despesas do mês</small><b className={s.dn}>R$ 3.870</b></div>
      </div>
      <div className={s.db2}>
        <div className={s.bx}>
          <h4>Evolução financeira</h4>
          <svg viewBox="0 0 300 120" width="100%" aria-hidden="true">
            <defs><linearGradient id="pv-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#10B981" stopOpacity=".35" /><stop offset="1" stopColor="#10B981" stopOpacity="0" /></linearGradient></defs>
            <path d="M0 95L50 82L100 88L150 58L200 62L250 34L300 22V120H0Z" fill="url(#pv-area)" />
            <path d="M0 95L50 82L100 88L150 58L200 62L250 34L300 22" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={s.bx}>
          <h4>Gastos por categoria</h4>
          <div className={s.donut} />
          <div className={s.lg}>
            <span><b style={{ background: "#10B981" }} />Moradia</span>
            <span><b style={{ background: "#3D5675" }} />Mercado</span>
            <span><b style={{ background: "#A9C4DC" }} />Lazer</span>
            <span><b style={{ background: "#D4AF37" }} />Outros</span>
          </div>
        </div>
      </div>
      <div className={s.bx} style={{ marginTop: 10 }}>
        <h4>Últimas movimentações</h4>
        <div className={s.tr}><div>Supermercado<span>Hoje · Cartão</span></div><b className={s.dn}>− R$ 238,90</b></div>
        <div className={s.tr}><div>Salário<span>Ontem · Conta</span></div><b className={s.up}>+ R$ 5.200,00</b></div>
        <div className={s.tr}><div>Assinatura streaming<span>Seg · Recorrente</span></div><b className={s.dn}>− R$ 39,90</b></div>
      </div>
    </div>
  );
}
