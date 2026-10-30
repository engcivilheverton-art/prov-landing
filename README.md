# PROV. — Landing page (Next.js + TypeScript)

Página pública de vendas do aplicativo web PROV. Next.js 14 (App Router), TypeScript, CSS Modules.
Sem Tailwind e sem biblioteca de UI, para não conflitar com o app existente.

## Rodar localmente

```bash
npm install
cp .env.example .env.local   # ajuste a URL do site
npm run dev                  # http://localhost:3000
npm run typecheck && npm run build
```

Em modo isolado, `/login`, `/cadastro` e `/dashboard` não existem (são do app). `/privacidade` e `/termos`
são páginas provisórias: troque pelo texto jurídico definitivo.

## Planos e preços

Edite `lib/landing-config.ts`:

- Mensal: R$ 11,99 por mês.
- Anual: R$ 9,99 por mês, em pagamento único de R$ 119,88 por ano.
- A economia (17%, R$ 24,00 por ano) é calculada automaticamente a partir desses valores.

## Conectar ao app web existente

1. Copie para o projeto do app: `components/landing/`, `lib/landing-config.ts`, `public/brand/logo-prov.png`
   e as pastas `app/privacidade`, `app/termos` (se ainda não existirem).
2. Em `app/page.tsx` do app, use o conteúdo deste `app/page.tsx` (ou renderize `<Landing />`).
   Se `/` hoje redireciona para o dashboard, deixe a landing em `/` e redirecione apenas usuários já logados.
3. Não copie `app/layout.tsx` deste projeto: use o layout raiz do app.
4. Confirme que `@/*` aponta para a raiz no `tsconfig.json` do app.
5. Os botões já apontam para `ROUTES` (`/login`, `/cadastro`). Nada de autenticação foi criado aqui:
   reutilize o Firebase Authentication que já existe nessas rotas.
6. Rode `npm run build` para conferir. A landing não altera o dashboard nem as funções internas.

## Fluxo de assinatura (gateway externo)

Os botões de assinar levam a `/cadastro?plano=mensal` ou `/cadastro?plano=anual`. Sugestão de fluxo:

1. O app cria a conta (Firebase Auth) e lê o parâmetro `plano`.
2. Redireciona ao checkout hospedado do gateway escolhido, enviando e-mail e ID do usuário.
3. O gateway avisa o pagamento por webhook; o backend valida a assinatura do webhook e grava o status.
4. O app libera ou bloqueia o acesso com base nesse status, nunca apenas pelo retorno do checkout.

Esta landing não processa pagamentos.

## Trocar imagens e textos

- Telas da demonstração: `components/landing/Demo.tsx` e `DashboardMock.tsx` (hoje ilustrativas).
  Para usar capturas reais, coloque os arquivos em `public/screens/` e use `next/image`.
- Imagem de compartilhamento: `app/page.tsx` usa a logo. Para um Open Graph melhor, crie `public/og.png` (1200×630).
- Textos: um arquivo por seção em `components/landing/`.

## Subir no GitHub

```bash
git init
git add .
git commit -m "Landing page PROV."
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```
