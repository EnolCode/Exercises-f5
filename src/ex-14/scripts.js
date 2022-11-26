// Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
const button = document.querySelector(".button");
const result = document.querySelector(".result");

function printNumbsResult(result, element) {
  element.innerHTML = result;
}

function takeDividers(number, arr) {
  for (let i = number; i >= 0; i--) {
    if (number % i == 0) {
      arr.push(i);
    }
  }
}

function ordenedArr(arr) {
  return (arr = [...arr].sort());
}

function takeDuplicated(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i + 1] === arr1[i]) {
      arr2.push(arr1[i]);
    }
  }
}

button.addEventListener("click", () => {
  const numb = parseInt(document.querySelector(".numb1").value);
  const numb2 = parseInt(document.querySelector(".numb2").value);
  let dividers = [];
  let dividersRepeated = [];

  takeDividers(numb, dividers);
  takeDividers(numb2, dividers);
  const orderedArray = ordenedArr(dividers);
  takeDuplicated(orderedArray, dividersRepeated);

  dividersRepeated = ` Los divisores en comun del ${numb} y ${numb2} son: ${dividersRepeated.join(
    ", "
  )}.`;

  printNumbsResult(dividersRepeated, result);
});
