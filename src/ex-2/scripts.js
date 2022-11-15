function printMessage() {
  const div = document.getElementById("div__result");
  console.log(div);
  result = 8;
  div.innerHTML = `<h1>La suma de 3 + 5 es ${result}.</h1>`;
}

printMessage();
