import { apiGet } from "../core/api.service";

export function Cart(): HTMLElement {
  const el = document.createElement("div");
  el.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">Your Cart</h2>
    <div id="cart-list">Loading...</div>
    <div class="mt-4"><a href="#/checkout" class="px-4 py-2 bg-blue-600 text-white rounded">Checkout</a></div>`;
  const list = el.querySelector("#cart-list") as HTMLElement;
  apiGet("/cart-service/api/cart/1").then((items: any[]) => {
    list.innerHTML =
      items.length === 0
        ? '<div class="text-gray-600">Cart is empty</div>'
        : items.map((i) => `<div class="p-3 bg-white rounded mb-2">Product ${i.productId} — qty ${i.qty}</div>`).join("");
  });
  return el;
}
