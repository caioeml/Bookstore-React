import { Link } from "react-router-dom";
import useCartOnCartPage from "./useCartOnCartPage"; 
import "./App.css"; 
function Cart() {
  useCartOnCartPage();

  return (
     <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="logo_caio_entre_livros-removebg-preview (2).png" alt="Logo" />
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/#About">Sobre</Link>
            <Link to="/#Menu">Catálogo</Link>
            <Link to="/#Address">Endereço</Link>
            <Link to="/cart">Carrinho 🛒</Link>
          </div>

          <div className="nav-spacer"></div>
        </nav>
      </header>

      <section className="cart" id="cart">
        <div id="cart-section">
          <h2 className="title">
            Seus <span>PEDIDOS</span>
          </h2>

          <div
            id="cartItems"
            style={{ marginTop: 18, color: "#fff", padding: "3rem" }}
          />

          <div className="cart-summary">
            <p>
              <strong style={{ fontSize: "1.5rem", padding: "1rem", color: "#fff" }}>
                Itens:
              </strong>{" "}
              <span id="cartItemsCount">0</span>
            </p>

            <p style={{ fontSize: "1.5rem", padding: "1rem", color: "#fff" }}>
              <strong>Total:</strong>{" "}
              <span
                id="cartTotal"
                style={{
                  fontSize: "1.6rem",
                  padding: "0.2rem",
                  color: "#000000",
                  backgroundColor: "#e1c8a0",
                  borderRadius: 6,
                }}
              >
                R$ 0,00
              </span>
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/#Menu" className="btn">Continuar comprando</Link>
              <a href="#" className="btn" id="clearCart">Limpar carrinho</a>
              <a href="" className="btn">Finalizar compra</a>
            </div>
          </div>
        </div>
      </section>
      useCartOnCartPage();
   </>
  );
}

export default Cart;
