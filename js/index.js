const root = document.querySelector("div");
const h1 = document.createElement("h1");


h1.textContent = "Element added via javascript";
h1.classList.add("heading");
root.appendChild(h1);
