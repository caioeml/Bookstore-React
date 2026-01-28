function Catalogo() {
return (
 <>
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
</>
)
}

export default Catalogo