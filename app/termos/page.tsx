import Link from "next/link";
import { APP_URL } from "@/lib/landing-config";

export const metadata = {
  title: "Termos de uso — PROV.",
  description: "Condições de acesso e uso do aplicativo PROV.",
};

const estilo: React.CSSProperties = {
  maxWidth: 800,
  margin: "0 auto",
  padding: "64px 24px",
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.7,
  color: "#172b4d",
};

export default function Page() {
  return (
    <main style={estilo}>
      <p><Link href="/">PROV.</Link></p>
      <h1>Termos de uso</h1>
      <p><strong>Última atualização: 16 de novembro de 2026.</strong></p>
      <p>Estes Termos explicam as condições de acesso ao PROV., aplicativo de organização e planejamento financeiro pessoal. Ao criar uma conta ou usar o aplicativo, você declara que leu e aceita estas condições. Se não concordar, não use o serviço.</p>

      <h2>1. Responsável e contato</h2>
      <p>O PROV. é operado por <strong>Heverton Alves Cardoso</strong>, pessoa física. Para dúvidas sobre o serviço, cobrança ou estes Termos, entre em contato pelo e-mail <a href="mailto:prov.suport@gmail.com">prov.suport@gmail.com</a>.</p>

      <h2>2. O que o PROV. oferece</h2>
      <p>O PROV. permite registrar e organizar informações financeiras fornecidas por você, como cartões, faturas, despesas, receitas, dívidas, contas fixas e caixinhas, além de apresentar gráficos, projeções e relatórios conforme os dados cadastrados. O serviço não se conecta à sua conta bancária para buscar ou movimentar dinheiro. A importação de CSV serve para cadastrar lançamentos a partir do arquivo escolhido por você.</p>
      <p>O PROV. é uma ferramenta de organização e apoio. Não presta consultoria financeira, contábil, de crédito ou de investimento, não recomenda operações financeiras e não substitui a conferência de extratos, faturas ou contratos junto às instituições responsáveis.</p>

      <h2>3. Conta e segurança</h2>
      <p>Você deve fornecer informações corretas, manter acesso seguro ao e-mail e às credenciais da conta e avisar o suporte se suspeitar de uso não autorizado. Cada pessoa é responsável pelas atividades feitas em sua conta. A autenticação é fornecida pelo Firebase; o PROV. não recebe nem armazena sua senha de acesso.</p>

      <h2>4. Planos, preços e cobrança</h2>
      <p>O plano gratuito oferece os recursos e limites indicados na tela de planos. Na data desta versão, inclui até 2 cartões, 1 conta fixa, 1 dívida e a escolha de 1 gráfico no painel. A importação de CSV e os demais recursos identificados como Premium dependem de assinatura ativa. Os limites podem ser ajustados para novas contas ou períodos, respeitados os direitos aplicáveis e as informações apresentadas antes da contratação.</p>
      <p>O Premium mensal custa <strong>R$ 9,90 por mês</strong>, com cobrança recorrente mensal. O Premium anual custa <strong>R$ 94,80 a cada 12 meses</strong> (equivalente a R$ 7,90 por mês), com cobrança recorrente anual. A cobrança é processada pelo Mercado Pago, conforme as condições exibidas no checkout. O acesso Premium é liberado após confirmação do pagamento. O preço aplicável à sua assinatura é o informado antes de você confirmar a contratação.</p>
      <p>Assinaturas já contratadas podem manter condições anteriores, conforme informado no momento da contratação. Uma mudança de preço não altera retroativamente uma cobrança já confirmada; qualquer novo valor deve ser informado antes de passar a valer para a sua assinatura.</p>

      <h2>5. Cancelamento, arrependimento e reembolso</h2>
      <p>Você pode solicitar o cancelamento da cobrança recorrente na área “Planos e assinatura” do aplicativo, quando disponível, ou pelo e-mail de suporte. O pedido interrompe as cobranças futuras depois de confirmado pelo processador de pagamento. O estado da assinatura e do acesso Premium será atualizado no aplicativo após essa confirmação. Se precisar de ajuda, escreva para <a href="mailto:prov.suport@gmail.com?subject=Cancelamento%20de%20assinatura">prov.suport@gmail.com</a>.</p>
      <p>Continuam garantidos os direitos previstos na legislação, inclusive o direito de arrependimento aplicável às contratações feitas fora do estabelecimento comercial. Para exercer esse direito ou solicitar análise de reembolso, contate o suporte dentro do prazo legal e informe o e-mail da conta e os dados da contratação. O tratamento do pedido observará a legislação aplicável e as regras do meio de pagamento.</p>

      <h2>6. Seus dados e seus registros</h2>
      <p>As informações financeiras cadastradas são fornecidas por você. Você pode consultar, corrigir, exportar ou solicitar a exclusão dos dados e da conta pelos recursos disponíveis no aplicativo, observadas as obrigações legais de retenção. O tratamento de dados pessoais está descrito na <Link href="/privacidade">Política de Privacidade</Link> da página e na <a href={`${APP_URL}/privacidade`}>política completa do aplicativo</a>.</p>
      <p>Você é responsável por conferir os dados que registra ou importa, inclusive datas, valores, categorias, parcelas e faturas. Projeções e relatórios dependem da precisão e da atualização dessas informações.</p>

      <h2>7. Uso permitido</h2>
      <p>Use o PROV. de forma lícita, para sua própria organização financeira, e não tente acessar contas ou dados de outras pessoas, contornar limites de segurança ou plano, interferir na disponibilidade do serviço, introduzir código malicioso ou usar o aplicativo para finalidade fraudulenta. Não compartilhe credenciais de forma que comprometa a segurança da conta.</p>

      <h2>8. Disponibilidade e alterações</h2>
      <p>O PROV. busca manter o serviço disponível, mas podem ocorrer interrupções para manutenção, atualizações ou por falhas de serviços de terceiros, como hospedagem, autenticação e pagamentos. Recursos, telas e funcionalidades podem evoluir. Alterações relevantes nestes Termos serão publicadas nesta página com a data de atualização; o uso continuado após a vigência indica ciência das condições atualizadas, sem afastar direitos garantidos por lei.</p>

      <h2>9. Propriedade intelectual</h2>
      <p>As marcas, interfaces, textos e componentes do PROV. são protegidos pela legislação aplicável. Estes Termos permitem o uso pessoal do aplicativo enquanto o serviço estiver disponível e sua conta estiver regular; não transferem a propriedade desses elementos.</p>

      <h2>10. Encerramento e legislação</h2>
      <p>Você pode deixar de usar o aplicativo e solicitar a exclusão da conta pelos meios disponíveis no perfil. O acesso pode ser suspenso quando necessário para proteger o serviço, cumprir a lei ou apurar uso indevido, com comunicação ao usuário quando possível. Estes Termos são regidos pelas leis brasileiras, preservados os direitos do consumidor e as regras legais de competência.</p>

      <h2>Fale com o PROV.</h2>
      <p>Para dúvidas ou solicitações, escreva para <a href="mailto:prov.suport@gmail.com">prov.suport@gmail.com</a>.</p>
      <p><Link href="/">Voltar à página inicial</Link></p>
    </main>
  );
}
