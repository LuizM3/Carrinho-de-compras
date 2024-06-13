import produtos from "./produtos";
import "./style_produtos.scss";
import Image from "next/image";


export default function Produtos() {

  return (
    <>
      <div id="divDosProdutos">
        {produtos.map((item) => (
          <div id={"Produto" + item.id} className="produto centro">
            <div id="divSeparadaDoProduto" className="centro">
              <div id="divImgProduto">
                <Image src={item.img} width={120} height={120} />
              </div>
              <div id="textoDosProdutos" className="centro">
                <div>
                  <h3 className="semMargem">{item.nome}</h3>
                </div>
                <div>
                  <h3 className="semMargem">R${item.preco},00</h3>
                </div>
                <div>
                  <h6 className="semMargem">{item.descricao}</h6>
                </div>
                <div className="botoes">
                  <div className="centro">
                    <button>
                      <svg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g fill="none" fill-rule="evenodd">
                            {" "}
                            <path d="m0 0h32v32h-32z"></path>{" "}
                            <path
                              d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm5 15h-10c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1h10c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1z"
                              fill="#202327"
                            ></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </button>
                    <div id={"ContadorDeProdutos" + item.id}>0</div>
                    <button>
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        class="bi bi-plus-circle-fill"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"></path>{" "}
                        </g>
                      </svg>
                    </button>
                  </div>
                  <button>Adicionar ao carrinho</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
