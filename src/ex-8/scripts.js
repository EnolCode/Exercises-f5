// Escribe un programa que pida una frase y escriba las vocales que aparecen

const button = document.querySelector(".button");

function converStringToArray(str) {
  return str.split("");
}

function searchLetter(text) {
  let count = 0;
  text.forEach((el) => {
    if (el === "a") count++;
    if (el === "e") count++;
    if (el === "i") count++;
    if (el === "o") count++;
    if (el === "u") count++;
  });
  return count;
}

button.addEventListener("click", () => {
  const text = document.querySelector(".text").value;
  const divResult = document.querySelector(".result");
  const str = converStringToArray(text);
  divResult.innerHTML = searchLetter(str);
});
