let display = document.getElementById("display");

let keys = document.getElementsByClassName("key");
let equals = document.getElementsByClassName("equals");
let clear = document.getElementById("clear");

for (let index = 0; index < keys.length; index++) {
  const element = keys[index];

  element.addEventListener("click", function (event) {
    display.innerHTML += event.target.value;
  });
}

for (let index = 0; index < equals.length; index++) {
  const element = equals[index];

  element.addEventListener("click", function (event) {
    let result = eval(display.innerHTML);
    display.innerHTML = result;
  });
}

clear.addEventListener("click", function () {
  display.innerHTML = "";
});
