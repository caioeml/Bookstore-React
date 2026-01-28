
export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


export function updateCartDot() {
  const cart = getCart();
  const dot = document.getElementById("cartDot");
  if (!dot) return;

  const hasItems = cart.some((item) => item.qty > 0);
  dot.style.display = hasItems ? "block" : "none";
}

export function addToCart(product) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) existing.qty += 1;
  else cart.push({ ...product, qty: 1 });

  saveCart(cart);
  updateCartDot();
}
