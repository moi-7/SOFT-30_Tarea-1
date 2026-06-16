const body = document.querySelector("body");
const root = document.createElement("div");

body.appendChild(root);
root.setAttribute("id", "root");

const h1 = document.createElement("h1");
h1.textContent = "testing...";
h1.classList.add("test");
root.appendChild(h1);

