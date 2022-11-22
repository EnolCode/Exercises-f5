// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

const button = document.querySelector(".button");

function converStringToArray(str) {
  return str.split("");
}

function searchLetter(text, lett) {
  let count = 0;
  text.forEach((el) => {
    if (el === lett) count++;
  });
  return count;
}

button.addEventListener("click", () => {
  const text = document.querySelector(".text").value;
  const letter = document.querySelector(".letter").value;
  const divResult = document.querySelector(".result");
  const str = converStringToArray(text);
  divResult.innerHTML = searchLetter(str, letter);
});
