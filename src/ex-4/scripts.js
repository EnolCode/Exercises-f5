// Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.
const button = document.querySelector(".button");

function numb1SumNumb2(num1, num2, element) {
  const result = parseInt(num1) + parseInt(num2);
  element.innerHTML = `La suma de ${num1} + ${num2} es ${result}`;
}

button.addEventListener("click", () => {
  const numb1 = document.querySelector(".numb1").value;
  const numb2 = document.querySelector(".numb2").value;
  const divResult = document.querySelector(".result");
  numb1SumNumb2(numb1, numb2, divResult);
});
