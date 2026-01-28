import Cart from "./cart"

function Botao() {
    return (
    <a href={<Cart/>}className="cart-link">
    Carrinho 🛒
    <span className="cart-dot" id="cartDot"></span>
    </a>
    )
}

export default Botao