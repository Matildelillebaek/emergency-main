const html = document.querySelector("html");
const btn = document.querySelector("#toggle");
console.log("js");
function toggleTheme() {
  console.log("toggle_loaded");
  html.classList.toggle("dark");
}

btn.addEventListener("click", toggleTheme);
