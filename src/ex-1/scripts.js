function printMessage() {
  const div = document.getElementById("div__title");
  console.log(div);
  message = "Hello JavaScript!!";
  div.innerHTML = `<h1>${message}</h1>`;
}

printMessage();
