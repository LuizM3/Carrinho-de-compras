import Link from "next/link";
import Image from "next/image";
import "./style_header.scss";

export default function Header() {
  return (
    <div id="header" className="centro">
      <div id="logo" className="centro">
        <Link href={"/"} id="img" className="link centro">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="shoppingcart"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
              fill="#00c932"
              class="color000000 svgShape"
            ></path>
          </svg>{" "}
        </Link>
      </div>

      <div id="links" className="centro">
        <Link href={"/"} id="home" className="link centro">
          Home
        </Link>
        <Link href={"/dashboard"} id="dash" className="link centro">
          Dashboard
        </Link>
        <Link href={"/produtos"} id="prod" className="link centro">
          Produtos
        </Link>
        <Link href={"/dashboard"} id="sobre" className="link centro">
          Sobre
        </Link>
      </div>

      <div id="loginCadastro" className="centro">
        <Link href={"/login"} id="login" className=" link centro">
          <svg
            fill="#000000"
            width="64px"
            height="64px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
            </g>
          </svg>
          <div>Login</div>
        </Link>
      </div>
    </div>
  );
}
