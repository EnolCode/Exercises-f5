// Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”

function hiUser(content, nombre) {
  content.innerHTML = `Hola ${nombre}`;
  deleteHi(nombre, content);
}

function deleteHi(element1, element2) {
  if (element1 == "") element2.innerHTML = "";
  console.log(element1);
}

input.addEventListener("keyup", () => {
  const input = document.getElementById("input");
  const div = document.getElementById("div");
  let value = input.value;
  hiUser(div, value);
});
