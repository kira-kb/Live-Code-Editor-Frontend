const html_code = document.querySelector(".html-code textarea");
const css_code = document.querySelector(".css-code textarea");
const js_code = document.querySelector(".js-code textarea");
const result = document.querySelector("#result");
const run_code = document.querySelector(".run");
const hum_burger = document.querySelector(".hum");
const side_bar = document.querySelector(".bar");
const overlay = document.querySelector(".blurish");
const menu_icon = document.querySelector(".menu");
const checkbox = document.querySelector(".checkbox");

function run() {
  localStorage.setItem("html_code", html_code.value);
  localStorage.setItem("css_code", css_code.value);
  localStorage.setItem("js_code", js_code.value);

  result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>
${localStorage.html_code}
<script>${localStorage.js_code}</script>`;
  result.contentWindow.eval(localStorage.js_code);
}

checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    html_code.addEventListener("keyup", run);
    css_code.addEventListener("keyup", run);
    js_code.addEventListener("keyup", run);
  } else {
    html_code.removeEventListener("keyup", run);
    css_code.removeEventListener("keyup", run);
    js_code.removeEventListener("keyup", run);
  }
});

run_code.addEventListener("click", run);

html_code.value = localStorage.html_code ? localStorage.html_code : "";
css_code.value = localStorage.css_code ? localStorage.css_code : "";
js_code.value = localStorage.js_code ? localStorage.js_code : "";

let is_visible = false;
hum_burger.addEventListener("click", () => {
  if (!is_visible) {
    side_bar.classList.remove("hide_bar");
    overlay.classList.add("overlay");
    menu_icon.classList.remove("fa-bars");
    menu_icon.classList.add("fa-times");
  } else {
    side_bar.classList.add("hide_bar");
    overlay.classList.remove("overlay");
    menu_icon.classList.add("fa-bars");
    menu_icon.classList.remove("fa-times");
  }
  is_visible = !is_visible;
});
overlay.addEventListener("click", () => {
  side_bar.classList.add("hide_bar");
  overlay.classList.remove("overlay");
  menu_icon.classList.add("fa-bars");
  menu_icon.classList.remove("fa-times");
});
