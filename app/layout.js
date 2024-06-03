
export const metadata = {
  title: "Carrinho de Compras",
  description: "Adicione itens no carrinho e veja o preço final.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
