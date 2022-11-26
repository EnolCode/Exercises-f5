// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
const button = document.querySelector(".button");
const result = document.querySelector(".result");

function printNumbsResult(numb, element) {
  if (numb % 2 === 0) return (element.innerHTML = `El ${numb} es divisible por 2`);
  if (numb % 3 === 0) return (element.innerHTML = `El ${numb} es divisible por 3`);
  if (numb % 5 === 0) return (element.innerHTML = `El ${numb} es divisible por 5`);
  if (numb % 7 === 0) return (element.innerHTML = `El ${numb} es divisible por 7`);
  return (element.innerHTML = `El ${numb} no es divisible por ninguno de nuestros números`);
}

button.addEventListener("click", () => {
  const numb = parseInt(document.querySelector(".numb").value);
  printNumbsResult(numb, result);
});
