import { apiPost } from "../core/api.service";

export function Login(): HTMLElement {
  const el = document.createElement("div");
  el.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">Login</h2>
    <div class="bg-white p-6 rounded">
      <input id="email" placeholder="email" class="border p-2 w-full mb-2" />
      <input id="password" type="password" placeholder="password" class="border p-2 w-full mb-2" />
      <button id="login" class="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
    </div>`;
  el.querySelector("#login")!.addEventListener("click", async () => {
    const email = (el.querySelector("#email") as HTMLInputElement).value;
    const password = (el.querySelector("#password") as HTMLInputElement).value;
    const res = await apiPost("/auth-service/api/auth/login", { email, password });
    if (res.token) {
      localStorage.setItem("token", res.token);
      alert("Logged in");
    } else alert("Login failed");
  });
  return el;
}
