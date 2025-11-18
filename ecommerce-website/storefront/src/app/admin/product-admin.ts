import { apiGet, apiPost } from "../core/api.service";

export function AdminProducts(): HTMLElement {
  const el = document.createElement("div");
  el.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">Admin — Products</h2>
    <div id="list">Loading...</div>
    <div class="mt-4"><button id="new" class="px-3 py-1 bg-green-600 text-white rounded">Create sample</button></div>`;
  apiGet("/product-service/api/products").then((items: any[]) => {
    el.querySelector("#list")!.innerHTML = items
      .map((i) => `<div class="p-3 bg-white rounded mb-2"><b>${i.name}</b> — ${i.price}</div>`)
      .join("");
  });
  el.querySelector("#new")!.addEventListener("click", async () => {
    const created = await apiPost("/product-service/api/products", {
      name: "Sample",
      price: 9.99,
      description: "Sample product"
    });
    alert("Created id " + created.id);
  });
  return el;
}
