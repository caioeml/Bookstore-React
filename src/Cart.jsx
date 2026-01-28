function Cart() {
    return (
        <div>
            <body>

<header>
  <nav className="navbar">
    <div className="logo">
      <img src="imagem/logo_caio_entre_livros-removebg-preview (2).png" alt="Logo"/>
    </div>

    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="index.html#About">Sobre</a>
      <a href="index.html#Menu">Catálogo</a>
      <a href="index.html#Address">Endereço</a>
      <a href="Cart.jsx">Carrinho 🛒</a>
    </div>

    <div className="nav-spacer"></div>
  </nav>
</header>

<section className="cart" id="cart">
  <div id="cart-section">
    <h2 className="title">Seus <span>PEDIDOS</span></h2>

    <div id="cartItems" style="margin-top: 18px; color: #fff; padding: 3rem;"></div>

      <div className="cart-summary">
        <p ><strong style="font-size: 1.5rem; padding: 1rem; color:#fff">Itens:</strong> <span id="cartItemsCount">0</span></p>
        <p style="font-size: 1.5rem; padding: 1rem; color: #fff;"><strong>Total:</strong> <span id="cartTotal" style="font-size: 1.6rem; padding: 0.2rem; color: #000000; background-color: #e1c8a0; border-radius: 6px;">R$ 0,00</span></p>

      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="index.html#Menu" className="btn">Continuar comprando</a>
        <a href="#" className="btn" id="clearCart">Limpar carrinho</a>
        <a href="" className="btn">Finalizar compra</a>
      </div>
    </div>
  </div>
</section>

</body>
        </div>
    )
}

export default Cart