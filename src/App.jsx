import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Cart from "./cart";
import Botao from "./Botao";

function App() {
  return <> 
  <div>
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
      <BrowserRouter>
      <Routes>
        <Route path="/Cart" element={Cart}/>
      </Routes>
      </BrowserRouter>
    </div>
    

    <div className="nasv-spacer"></div>
  </nav>
</header>
    
<div className="home-container">
    <section id="Home">
        <div id="content">
            <h3>Os Melhores Livros você encontra aqui</h3>
            <p><span>Cada</span> obra é escolhida com cuidado para acompanhar seus momentos de pausa, reflexão e descoberta. <span>Histórias</span> que acolhem, provocam e permanecem, seja para quem lê por prazer, estudo ou simplesmente para se perder em boas páginas. <span>A</span>  leitura é mais do que hábito — é experiência.</p>
            <a href="#Menu" className="btn">Escolha o seu agora</a>
        </div>
    </section>
</div>

<section className="About" id="About">
    <h2 className="title">Sobre <span>NÓS</span></h2>
    <div className="row">
        <div>
            <img src="logo_caio_entre_livros-removebg-preview (2).png" alt=""/>
        </div>
        <div className="content">
            <h3>O que nos faz diferentes?</h3>
            <p>Caio, entre Livros nasceu do desejo de transformar a leitura em uma experiência acolhedora e significativa. Acreditamos que cada livro carrega mais do que palavras: carrega encontros, reflexões e histórias capazes de marcar momentos da vida.</p>
            <p>Nossa curadoria é feita com atenção aos detalhes, reunindo obras que despertam emoções, ampliam perspectivas e acompanham diferentes fases do leitor. Do clássico ao contemporâneo, buscamos títulos que convidam à pausa, ao silêncio e à descoberta.</p>
            <a href="" className="btn">Saiba Mais</a>
        </div>
    </div>
</section>

<section className="Menu" id="Menu">
    <h2 className="title">Nossos Livros</h2>

    <div className="box-container">
<div className="box-container">

  <div className="box">
    <img src="a empregada.jpg" alt="item 1"/>
    <h3>A EMPREGADA</h3>
    <div className="price">20,99 <span>29,99</span></div>
    <a href="#"
       className="btn add-to-cart"
       data-id="p1"
       data-name="A Empregada"
       data-price="20.99"
       data-img="imagem/a empregada.jpg">
       Adicione ao carrinho
    </a>
  </div>

  <div className="box">
    <img src="fodasemaisum_.jpg" alt="item 2"/>
    <h3>UMA SEGUNDA CHANCE</h3>
    <div className="price">20,99 <span>29,99</span></div>
    <a href="#"
       className="btn add-to-cart"
       data-id="p2"
       data-name="Uma Segunda Chance"
       data-price="20.99"
       data-img="imagem/fodasemaisum_.jpg">
       Adicione ao carrinho
    </a>
  </div>

  <div className="box">
    <img src="mentirosos.jpg" alt="item 3"/>
    <h3>MENTIROSOS</h3>
    <div className="price">20,99 <span>29,99</span></div>
    <a href="#"
       className="btn add-to-cart"
       data-id="p3"
       data-name="Mentirosos"
       data-price="20.99"
       data-img="imagem/mentirosos.jpg">
       Adicione ao carrinho
    </a>
  </div>

  <div className="box">
    <img src="otro.jpg" alt="item 4"/>
    <h3>O MASSACRE DA FAMILIA HOPE</h3>
    <div className="price">20,99 <span>29,99</span></div>
    <a href="#"
       className="btn add-to-cart"
       data-id="p4"
       data-name="O Massacre da Familia Hope"
       data-price="20.99"
       data-img="imagem/otro.jpg">
       Adicione ao carrinho
    </a>
  </div>

  <div className="box">
    <img src="poderdohabito.jpg" alt="item 5"/>
    <h3>O PODER DO HÁBITO</h3>
    <div className="price">20,99 <span>29,99</span></div>
    <a href="#"
       className="btn add-to-cart"
       data-id="p5"
       data-name="O Poder do Hábito"
       data-price="20.99"
       data-img="poderdohabito.jpg">
       Adicione ao carrinho
    </a>
  </div>

  <div className="box">
    <img src="tudo q deixamos inacabado.jpg" alt="item 6"/>
    <h3>TUDO QUE DEIXAMOS INACABADO</h3>
    <div className="price">20,99 <span>29,99</span></div>
    <a href="#"
       className="btn add-to-cart"
       data-id="p6"
       data-name="Tudo que Deixamos Inacabado"
       data-price="20.99"
       data-img="tudo q deixamos inacabado.jpg">
       Adicione ao carrinho
    </a>
  </div>

</div>

    </div>
    <div className="btnconfira"><a href="https://www.amazon.com.br/b/?ie=UTF8&rw_useCurrentProtocol=1&node=13420258011&ref_=cct_cg_VN_1a1&pf_rd_p=4cd5acf8-67e1-4481-9c02-99c794831cad&pf_rd_r=PK5NS0HXWP81VQJTEGQW" className="btn">Confira Mais</a></div>
</section>

<section className="Address" id="Address">
    <h2 className="title">Nosso <span>Endereço</span></h2>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.152384384154!2d-49.180620724679265!3d-25.354951777609752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce8ec035c84bb%3A0x74c226d4991720a2!2sR.%20Nair%20Vi%C3%AAira%20Moreira%2C%2045%20-%20Parque%20Res.%20Santa%20Terezinha%20II%2C%20Colombo%20-%20PR%2C%2083408-806!5e1!3m2!1sen!2sbr!4v1768996709875!5m2!1sen!2sbr"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

</section>

<section className="footer">
    <div className="share">
        <img width="50" height="50" src="https://img.icons8.com/ios/50/ffffff/instagram-new--v1.png" alt="instagram-new--v1"/>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/ffffff/facebook-new.png" alt="facebook-new"/>
        <img width="50" height="50" src="https://img.icons8.com/ios/50/ffffff/twitterx--v1.png" alt="twitterx--v1"/>
    </div>
</section>

</div>
  </>;
}

export default App