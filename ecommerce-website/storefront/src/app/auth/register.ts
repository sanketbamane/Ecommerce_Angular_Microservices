import { apiPost } from "../core/api.service";

export function Register(): HTMLElement {
  const el = document.createElement("div");
  el.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">Register</h2>
    <div class="bg-white p-6 rounded">
      <input id="email" placeholder="email" class="border p-2 w-full mb-2" />
      <input id="password" type="password" placeholder="password" class="border p-2 w-full mb-2" />
      <button id="register" class="px-4 py-2 bg-green-600 text-white rounded">Register</button>
    </div>`;
  el.querySelector("#register")!.addEventListener("click", async () => {
    const email = (el.querySelector("#email") as HTMLInputElement).value;
    const password = (el.querySelector("#password") as HTMLInputElement).value;
    const res = await apiPost("/auth-service/api/auth/register", { email, password });
    if (res.id) {
      alert("Registered. Please login.");
      location.hash = "#/login";
    }
  });
  return el;
}
