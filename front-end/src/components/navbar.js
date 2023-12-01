import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link href="/">
                        <Image src="/img/logo.png" width={100} height={100} alt="Logo" />
                    </Link>
                </div>
                <div className="menu">
                    <ul>                  
                        <li><Link href="/jogos">Jogos</Link></li>
                        <li><Link href="/noticias">Noticias</Link></li>
                        <li><Link href="/comunidade">Comunidade</Link></li>
                        <li><Link href="/sobre">Sobre Nós</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/cadastro">Criar Conta</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}