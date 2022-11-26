// Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
const button = document.querySelector(".button");
const result = document.querySelector(".result");

function printNumbsResult(numb, element) {
  if (numb % 2 === 0) element.innerHTML = `El ${numb} es divisible por 2. <br>`;
  if (numb % 3 === 0) element.innerHTML += `El ${numb} es divisible por 3. <br>`;
  if (numb % 5 === 0) element.innerHTML += `El ${numb} es divisible por 5. <br>`;
  if (numb % 7 === 0) element.innerHTML += `El ${numb} es divisible por 7. <br> `;
  if (element.innerHTML === "") element.innerHTML = `El ${numb} NO es divisible por 2, 3, 5 o 7.`;
}

button.addEventListener("click", () => {
  const numb = parseInt(document.querySelector(".numb").value);
  printNumbsResult(numb, result);
});
