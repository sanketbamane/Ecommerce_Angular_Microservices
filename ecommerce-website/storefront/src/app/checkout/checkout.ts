import { apiPost } from "../core/api.service";

export function Checkout(): HTMLElement {
  const el = document.createElement("div");
  el.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">Checkout</h2>
    <div class="bg-white p-6 rounded">
      <p>Mock payment: click Pay to place order.</p>
      <button id="pay" class="px-4 py-2 bg-green-600 text-white rounded mt-4">Pay</button>
    </div>`;
  el.querySelector("#pay")!.addEventListener("click", async () => {
    const order = await apiPost("/order-service/api/orders", { userId: 1, total: 10.0 });
    alert("Order placed: " + order.id);
    location.hash = "#/orders";
  });
  return el;
}
