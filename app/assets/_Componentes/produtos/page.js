import produtos from "./produtos";
import "./style_produtos.scss";

export default function Produtos() {

  return (
    <>
      <div>
        {produtos.map((item) => (
          <div id={item.id} className="produto">
            <div>imagem</div>
            <h3>{item.nome}</h3>
            <h4>{item.preco}</h4>
            <h6>{item.descricao}</h6>
          </div>
        ))}
      </div>
    </>
  );
}
