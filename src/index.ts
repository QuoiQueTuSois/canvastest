
import App from "./App"
document.getElementById("app")!.appendChild(App())

const button = document.getElementById("button");


button.addEventListener("click", () => {
  alert("clicked!");
});


