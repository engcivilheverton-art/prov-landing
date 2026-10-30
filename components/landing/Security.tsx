import Icon, { IconName } from "./Icon";
import s from "./landing.module.css";

const ITEMS: [IconName, string, string][] = [
  ["user", "Acesso individual", "Cada usuário acessa a sua própria conta."],
  ["shield", "Proteção dos dados", "Cuidado com os dados dos usuários."],
  ["lock", "Conexão segura", "Acesso por conexão segura."],
  ["doc", "Privacidade e transparência", "Política de privacidade clara e acessível."],
];

export default function Security() {
  return (
    <section className={s.sec}>
      <div className={s.w}>
        <div className={s.c} data-reveal>
          <div className={s.eyebrow}>Segurança e privacidade</div>
          <h2>Suas informações financeiras merecem cuidado.</h2>
        </div>
        <div className={s.g4}>
          {ITEMS.map(([icon, title, text]) => (
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
