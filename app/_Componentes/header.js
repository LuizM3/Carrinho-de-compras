import Link from "next/link";
import Image from "next/image";
import "./style.scss";

export default function Header() {
  return (
    <div id="header" className="centro">
      <div id="logo" className="centro">
        <Link href={"/"} id="img" className="link centro">
          <Image src="/favicon.ico" width={60} height={60} />
        </Link>
      </div>

      <div id="links" className="centro">
        <Link href={"/"} id="home" className="link centro">
          Home
        </Link>
        <Link href={"/dashboard"} id="dash" className="link centro">
          Dashboard
        </Link>
        <Link href={"/"} id="prod" className="link centro">
          Produtos
        </Link>
        <Link href={"/dashboard"} id="sobre" className="link centro">
          Sobre
        </Link>
      </div>

      <div id="loginCadastro" className="centro">
        <Link href={"/login"} id="login" className=" link centro">
        <svg fill="#000000" width="64px" height="64px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg>
          <div>Login</div>
        </Link>
      </div>
    </div>
  );
}
