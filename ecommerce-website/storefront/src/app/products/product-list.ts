import { apiGet } from "../core/api.service";

export function ProductList(): HTMLElement {
  const el = document.createElement("div");
  el.innerHTML = `<h2 class="text-2xl font-semibold mb-4">Products</h2><div id="list">Loading...</div>`;
  const list = el.querySelector("#list") as HTMLElement;

  apiGet("/product-service/api/products").then((items: any[]) => {
    list.innerHTML = items
      .map(
        (i) => `
        <div class="p-4 bg-white rounded mb-3 flex justify-between">
          <div>
            <b>${i.name}</b>
            <div class="text-sm text-gray-600">${i.description || ""}</div>
          </div>
          <div>
            <div class="text-lg font-semibold">${i.price}</div>
            <div class="mt-2"><a class="px-3 py-1 bg-blue-600 text-white rounded" href="#/product?id=${i.id}">View</a></div>
          </div>
        </div>`
      )
      .join("");
  });
  return el;
}
