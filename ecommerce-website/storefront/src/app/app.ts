import { Home } from "./home";
import { ProductList } from "./products/product-list";
import { ProductDetail } from "./products/product-detail";
import { Cart } from "./cart/cart";
import { Checkout } from "./checkout/checkout";
import { Login } from "./auth/login";
import { Register } from "./auth/register";
import { AdminProducts } from "./admin/product-admin";

const routes: Record<string, () => HTMLElement> = {
  "/": Home,
  "/products": ProductList,
  "/product": ProductDetail,
  "/cart": Cart,
  "/checkout": Checkout,
  "/login": Login,
  "/register": Register,
  "/admin/products": AdminProducts
};

export function App(): HTMLElement {
  const container = document.createElement("div");
  container.className = "min-h-screen";

  const nav = document.createElement("nav");
  nav.className = "bg-white p-4 shadow";
  nav.innerHTML = `
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <a href="#/" class="font-bold text-xl">Storefront</a>
      <div>
        <a href="#/products" class="mr-4">Products</a>
        <a href="#/cart" class="mr-4">Cart</a>
        <a href="#/admin/products" class="text-sm text-red-600">Admin</a>
      </div>
    </div>
  `;
  container.appendChild(nav);

  const outlet = document.createElement("div");
  outlet.id = "outlet";
  outlet.className = "max-w-6xl mx-auto p-6";
  container.appendChild(outlet);

  function render() {
    const hash = location.hash.replace("#", "") || "/";
    const route = hash.split("?")[0];
    const view = routes[route];
    outlet.replaceChildren(view ? view() : Home());
  }

  window.addEventListener("hashchange", render);
  render();
  return container;
}
