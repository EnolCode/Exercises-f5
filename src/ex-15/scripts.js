// Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad
const button = document.querySelector(".button");
const result = document.querySelector(".result");

function printNumbsResult(arr, element, num) {
  if (arr.length == 2) return (element.innerHTML = `El ${num} es un número primo`);
  return (element.innerHTML = `El ${num} NO es un número primo`);
}

function primeNumber(numb, arr) {
  for (let i = numb; i > 0; i--) {
    if (numb % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

button.addEventListener("click", () => {
  const numb = parseInt(document.querySelector(".numb").value);
  let primeNumbers = [];
  primeNumber(numb, primeNumbers);
  printNumbsResult(primeNumbers, result, numb);
});
