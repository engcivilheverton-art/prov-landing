# PROV. — página pública

Landing Next.js 15 (App Router), TypeScript e CSS Modules. Este projeto contém somente apresentação pública e CTAs; não autentica usuários, não armazena dados pessoais de acesso e não processa pagamentos. O app financeiro permanece em outro repositório e deployment independente.

## Desenvolvimento local

Requisitos: Node.js 20.9+.

```bash
npm ci
Copy-Item .env.example .env.local
npm run dev
```

A landing inicia em `http://localhost:3001`. Por padrão, os CTAs encaminham ao app em `http://localhost:3000`.

## Integração com o app

Configure `NEXT_PUBLIC_APP_URL` com a origem pública do app PROV correspondente ao ambiente. Os links levam a:

- Criar conta grátis: `/cadastro`.
- Entrar: `/login`.
- Contratar mensal/anual: `/cadastro?plano=mensal` ou `/cadastro?plano=anual`.

O app preserva Firebase Authentication, oferece acesso Free sem checkout e cria a assinatura Premium somente após a autenticação. A landing não recebe tokens ou segredos do Mercado Pago/Firebase.

Os preços e benefícios exibidos na seção Planos são obtidos de `GET {NEXT_PUBLIC_APP_URL}/api/billing/plans`, cuja fonte é `src/lib/planos.ts` no projeto do app. Se essa rota estiver inacessível, a landing apresenta o CTA Free e informa que os planos ficam disponíveis quando o app estiver acessível. Em Preview da Vercel, confirme que a proteção de deployment não impede a consulta servidor-a-servidor da landing à rota pública de planos.

## Variáveis de ambiente da landing

Configure somente no projeto Vercel da landing:

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Origem pública deste site, usada em metadados, robots e sitemap |
| `NEXT_PUBLIC_APP_URL` | Origem do app independente para CTAs e consulta pública de planos |
| `NEXT_PUBLIC_CONTACT_EMAIL` | E-mail público opcional do rodapé |

Preview e Production devem apontar para a URL de app correspondente. Não configure credenciais Firebase, tokens do Mercado Pago ou segredo de webhook neste projeto.

O checklist de publicação dos dois projetos fica no [repositório do aplicativo](https://github.com/engcivilheverton-art/Prov.Finance/blob/feature/mercadopago-checkout/DEPLOY_CHECKLIST.md).

## Verificação

```bash
npm run typecheck
npm run lint
npm run build
```

## Páginas legais

`/privacidade` e `/termos` são páginas provisórias. Substitua o conteúdo pelo texto jurídico definitivo antes de publicar amplamente.
