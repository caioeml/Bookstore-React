
import { useEffect } from "react";
import { addToCart, updateCartDot } from "./cartStore";

export default function useCartOnHome() {
  useEffect(() => {
    const onClick = (e) => {
      const btn = e.target.closest(".add-to-cart");
      if (!btn) return;

      e.preventDefault();

      const box = btn.closest(".box");
      if (!box) return;

      const imgEl = box.querySelector("img");
      const nameEl = box.querySelector("h3");
      const priceEl = box.querySelector(".price");

      const img = imgEl ? imgEl.getAttribute("src") : "";
      const name = nameEl ? nameEl.textContent.trim() : "Produto";

      
      const priceText =
        priceEl && priceEl.childNodes?.[0]
          ? priceEl.childNodes[0].textContent.trim()
          : "0";

      const price = Number(priceText.replace(".", "").replace(",", "."));

      const product = {
        id: btn.dataset.id,
        name,
        price,
        img,
      };

      addToCart(product);

      
      const oldText = btn.textContent;
      btn.textContent = "Adicionado ✓";
      setTimeout(() => (btn.textContent = oldText), 1000);
    };

    document.addEventListener("click", onClick);

    
    updateCartDot();

    return () => document.removeEventListener("click", onClick);
  }, []);
}
