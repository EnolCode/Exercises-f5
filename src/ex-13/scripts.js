// Escribir un programa que escriba en pantalla los divisores de un número dado
const button = document.querySelector(".button");
const result = document.querySelector(".result");

function printNumbsResult(result, element) {
  element.innerHTML = result;
}

button.addEventListener("click", () => {
  const numb = parseInt(document.querySelector(".numb").value);
  let dividers = [];
  for (let i = numb; i >= 0; i--) {
    if (numb % i == 0) {
      dividers.push(i);
    }
  }
  dividers = ` Los divisores del ${numb} son: ${dividers.join(", ")}.`;
  printNumbsResult(dividers, result);
});
