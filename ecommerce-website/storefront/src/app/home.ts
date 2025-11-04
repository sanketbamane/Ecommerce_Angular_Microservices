export function Home(): HTMLElement {
  const el = document.createElement("div");
  el.innerHTML = `
    <h1 class="text-3xl font-bold mb-4">Welcome to Storefront</h1>
    <p>Browse our products and checkout easily.</p>
    <p class="mt-6"><a href="#/products" class="text-blue-600">Start shopping →</a></p>
  `;
  return el;
}
