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
            <Link href="/produtos" className="centro botoesRedirecionadores">
              Ir para aba Produtos
            </Link>
          </div>
        </div>
      </div>

      <div id="parteBaixa">
        <div className="centro">
          <div id="imagemParteBaixa" className="centro"></div>
        </div>

        <div id="blocoDeTextosParteBaixa" className="centro">
          <div id="textoParteBaixa" className="centro">
            <div id="divDentroDeVariasDivs">
              <h1 className="centro">
                Acesse seu dashboard e<br /> veja seus produtos
              </h1>
              <div>
                <Link
                  href="/dashboard"
                  className="centro botoesRedirecionadores"
                >
                  Ir para aba Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
