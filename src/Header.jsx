import Botao from "./Botao"

function Header () {
    return (
<header>
  <nav className="navbar">
    <div className="logo">
      <img src="logo_caio_entre_livros-removebg-preview (2).png" alt="Logo"/>
    </div>

    <div className="nav-links">
      <a href="#Home">Home</a>
      <a href="#About">Sobre</a>
      <a href="#Menu">Catálogo</a>
      <a href="#Address">Endereço</a>
      <Botao/>
    </div>
    

    <div className="nasv-spacer"></div>
  </nav>
</header>
    )
}

export default Header