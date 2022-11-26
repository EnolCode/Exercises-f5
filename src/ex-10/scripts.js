// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
const button = document.querySelector(".button");

function searchVowels(str, regex) {
  const newStr = str.match(regex);
  return newStr;
}

function countVowels(text) {
  let objeto = {};
  for (var i in text) {
    objeto[text[i]] = (objeto[text[i]] || 0) + 1; // Incrementamos el valor si el elemento ya existe
  }
  return objeto;
}

function printVowelsResult(element, result) {
  Object.entries(result).forEach(([key, value]) => {
    element.innerHTML += `La "${key}" aparece: ${value} veces.<br>`;
  });
}

button.addEventListener("click", () => {
  const regex1 = /[aeiou]/g;
  const text = document.querySelector(".text").value.toLowerCase();
  const vowelsOfStr = searchVowels(text, regex1);
  const result = contarLetras(vowelsOfStr);
  printVowelsResult(document.querySelector(".result"), result);
});
