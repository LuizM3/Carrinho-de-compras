import Header from './assets/_Componentes/header/header';
import Footer from './assets/_Componentes/footer/footer';
import "./style.scss";

export const metadata = {
  title: "Carrinho de Compras",
  description: "Adicione itens no carrinho e veja o preço final.",
};

export default function RootLayout({ children}) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}