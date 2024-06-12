import Link from "next/link";
import "./style_mainPageParteAlta.scss";

export default function ParteAlta() {
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
    </>
  );
}
