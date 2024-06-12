import produtos from "./produtos";
import "./style_produtos.scss";
import Image from "next/image";

export default function Produtos() {
  return (
    <>
      <div id="divDosProdutos">
        {produtos.map((item) => (
          <div id={item.id} className="produto centro">
            <div id="divSeparadaDoProduto" className="centro">
              <div>
                <Image src={item.img} width={120} height={120} />
              </div>
              <div id="textoDosProdutos" className="centro">
                <div><h3 className="semMargem">{item.nome}</h3></div>
                <div>
                <h4 className="semMargem">R${item.preco},00</h4>
                </div>
                <div>
                <h6 className="semMargem">{item.descricao}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
