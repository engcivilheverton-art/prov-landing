// Layout usado apenas para rodar a landing de forma isolada.
// Ao integrar ao app existente, mantenha o layout raiz do app.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
