
import { Link } from "react-router-dom";


function Botao() {
    return (
              <Link to="/cart" className="cart-link">
                Carrinho 🛒
                <span className="cart-dot" id="cartDot"></span>
              </Link>
    )
}

export default Botao