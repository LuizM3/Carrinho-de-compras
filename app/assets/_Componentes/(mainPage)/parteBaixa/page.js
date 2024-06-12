import Link from "next/link";
import "./style_mainPageParteBaixa.scss";

export default function ParteBaixa() {
  return (
    <>
      <div id="parteBaixa">
        <div className="centro">
          <div id="imagemParteBaixa" className="centro"></div>
        </div>
        <div id="blocoDeTextosParteBaixa" className="centro">
          <div id="textoParteBaixa" className="centro">
            <div id="divDentroDeVariasDivs" className="centro">
              <h1 className="centro">
                Acesse seu dashboard e<br /> veja seus produtos
              </h1>
              
              <div className="centro">
              <Link href="/dashboard" className="centro botoesRedirecionadores">
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
