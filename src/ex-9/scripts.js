// <!-- Escribe un programa que pida una frase y escriba las vocales que aparecen -->

const button = document.querySelector(".button");

function searchVowels(str, regex) {
  const newStr = str.match(regex);
  return newStr;
}

function deleteVowelsDuplicates(arr) {
  const dataArr = new Set(arr);
  let result = [...dataArr];
  return result;
}

function printVowelsResult(element, result) {
  return (element.innerHTML = `Las vocales que aparecen en tu frase son ${result}`);
}

button.addEventListener("click", () => {
  const regex1 = /[aeiou]/g;
  const text = document.querySelector(".text").value.toLowerCase();
  let result = deleteVowelsDuplicates(searchVowels(text, regex1));
  printVowelsResult(document.querySelector(".result"), result);
});
