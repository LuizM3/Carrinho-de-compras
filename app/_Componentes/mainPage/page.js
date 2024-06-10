import Link from "next/link";
import "./style_mainPage.scss";
import Image from "next/image";

export default function MainPage() {
  return (
    <>
      <div id="parteSuperior" className="centro">
        <div className="centro" id="centralizar">
          <h1>Faça suas compras</h1>
          <div className="centro">
            <Link href="/produtos" className="centro">
              Ir para aba Produtos
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
