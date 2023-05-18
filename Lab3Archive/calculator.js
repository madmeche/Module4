let buttons = document.querySelector(".buttons");
let value = document.querySelector("#value");
let clear = document.querySelector("#clear");
let equals = document.querySelector("#equals");
let plus = document.querySelector("#plus");
buttons.addEventListener("click", (e) => {
  if (e.target.innerText === "Clear") {
    value.innerText = "";
  } else if (e.target.innerText === "0") {
    if (value.innerText === "0") {
      value.innerText = "0";
    } else {
      value.innerText += e.target.innerText;
    }
  } else if (e.target.innerText === ".") {
    if (value.innerText.includes(".")) {
      value.innerText = "0.";
    } else {
      value.innerText += e.target.innerText;
    }
  }
});
clear.addEventListener("click", () => {
  value.innerText = "";
});
equals.addEventListener("click", () => {
  let result = eval(value.innerText);
  value.innerText = result;
});
plus.addEventListener("click", () => {
  value.innerText = eval(value.innerText);
});
if (this.innerHTML == "=") {
  value.innerHTML = eval(value.innerHTML);
}
