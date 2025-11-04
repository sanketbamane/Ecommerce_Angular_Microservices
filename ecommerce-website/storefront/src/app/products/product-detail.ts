import { apiGet, apiPost } from "../core/api.service";

export function ProductDetail(): HTMLElement {
  const el = document.createElement("div");
  el.innerHTML = `<div id="pd">Loading...</div>`;
  const params = new URLSearchParams(location.hash.split("?")[1]);
  const id = params.get("id");

  apiGet(`/product-service/api/products/${id}`).then((p: any) => {
    el.querySelector("#pd")!.innerHTML = `
      <div class="bg-white p-6 rounded">
        <h2 class="text-2xl font-bold mb-2">${p.name}</h2>
        <p class="mb-4">${p.description || ""}</p>
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold">${p.price}</div>
          <button class="px-4 py-2 bg-green-600 text-white rounded" id="add">Add to cart</button>
        </div>
      </div>`;
    el.querySelector("#add")!.addEventListener("click", async () => {
      await apiPost("/cart-service/api/cart", { userId: 1, productId: p.id, qty: 1 });
      alert("Added to cart");
    });
  });
  return el;
}
