import Link from "next/link";
import { APP_URL } from "@/lib/landing-config";

export const metadata = { title: "Política de privacidade — PROV." };

export default function Page() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px", fontFamily: "system-ui, sans-serif", lineHeight: 1.65 }}>
      <p><Link href="/">PROV.</Link></p>
      <h1>Privacidade e dados pessoais</h1>
      <p>Esta página de vendas apresenta o PROV e direciona você ao aplicativo para criar uma conta. Os dados financeiros e de cadastro são tratados no aplicativo conforme a política completa abaixo.</p>

      <h2>O que o aplicativo trata</h2>
      <p>Para oferecer o serviço, o PROV trata dados de conta e autenticação e as informações financeiras que você registra, como cartões, faturas, receitas, despesas, dívidas, contas fixas e caixinhas. A importação de CSV é feita para cadastrar os lançamentos solicitados. O arquivo original não é mantido pelo aplicativo como arquivo armazenado.</p>

      <h2>Fornecedores e escolhas</h2>
      <p>O aplicativo utiliza Google/Firebase para autenticação e armazenamento, Netlify para hospedagem e Mercado Pago para assinaturas e pagamentos. O relatório para IA é preparado no seu navegador; ele só sai do PROV se você decidir copiá-lo e compartilhá-lo com outro serviço.</p>

      <h2>Seus direitos e contato</h2>
      <p>Você pode pedir acesso, correção ou outras providências sobre seus dados pelo canal de privacidade. No aplicativo, também é possível baixar os dados da conta ou solicitar sua exclusão. Para dúvidas, escreva para <a href="mailto:prov.suport@gmail.com?subject=Privacidade%20e%20dados%20pessoais">prov.suport@gmail.com</a>.</p>

      <p><a href={`${APP_URL}/privacidade`}>Leia a política de privacidade completa do aplicativo</a>.</p>
      <p><Link href="/termos">Termos de uso</Link></p>
    </main>
  );
}
