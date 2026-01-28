
import { useEffect } from "react";
import { getCart, saveCart, formatBRL, updateCartDot } from "./cartStore";

export default function useCartOnCartPage() {
  useEffect(() => {
    function renderCart() {
      const cart = getCart();
      const itemsEl = document.querySelector("#cartItems");
      const totalEl = document.querySelector("#cartTotal");
      const countEl = document.querySelector("#cartItemsCount");

      if (!itemsEl || !totalEl) return;

      itemsEl.innerHTML = "";

      if (cart.length === 0) {
        itemsEl.innerHTML = `<div class="cart-empty">Seu carrinho está vazio.</div>`;
        totalEl.textContent = formatBRL(0);
        if (countEl) countEl.textContent = 0;
        updateCartDot();
        return;
      }

      let total = 0;

      cart.forEach((item) => {
        total += item.price * item.qty;

        itemsEl.innerHTML += `
          <div class="cart-item">
            <img src="${item.img}" alt="${item.name}">
            
            <div>
              <h4>${item.name}</h4>
              <div class="price">
                <strong>${formatBRL(item.price * item.qty)}</strong>
              </div>
            </div>

            <div style="display:flex; flex-direction:column; gap:10px; align-items:flex-end;">
              <div class="qty-control">
                <a href="#" class="btn qty-minus" data-id="${item.id}">-</a>
                <a href="#" class="btn qty-plus" data-id="${item.id}">+</a>
              </div>

              <a href="#" class="btn remove-btn remove-item" data-id="${item.id}">Remover</a>
            </div>
          </div>
        `;
      });

      const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
      if (countEl) countEl.textContent = totalItems;

      totalEl.textContent = formatBRL(total);
      updateCartDot();
    }

    const onClick = (e) => {
      const plus = e.target.closest(".qty-plus");
      const minus = e.target.closest(".qty-minus");
      const remove = e.target.closest(".remove-item");
      const clear = e.target.closest("#clearCart");

      if (!(plus || minus || remove || clear)) return;

      e.preventDefault();

      let cart = getCart();

      if (plus) {
        const item = cart.find((i) => i.id === plus.dataset.id);
        if (item) item.qty += 1;
      }

      if (minus) {
        const item = cart.find((i) => i.id === minus.dataset.id);
        if (item) {
          item.qty -= 1;
          if (item.qty <= 0) cart = cart.filter((i) => i.id !== item.id);
        }
      }

      if (remove) {
        cart = cart.filter((i) => i.id !== remove.dataset.id);
      }

      if (clear) {
        cart = [];
      }

      saveCart(cart);
      renderCart();
    };

    document.addEventListener("click", onClick);

    
    renderCart();
    updateCartDot();

    return () => document.removeEventListener("click", onClick);
  }, []);
}
