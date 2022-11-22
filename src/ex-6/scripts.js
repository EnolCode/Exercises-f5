// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const button = document.querySelector(".button");

function numb1SumNumb2(num1, num2, element) {
  const number1 = parseInt(num1);
  const number2 = parseInt(num2);
  if (number1 > number2) return (element.innerHTML = `${number1} es mayor que ${number2}.`);
  if (number2 > number1) return (element.innerHTML = `${number2} es mayor que ${number1}.`);
  if (number2 === number1) return (element.innerHTML = `${number2} es igual que ${number1}.`);
}

button.addEventListener("click", () => {
  const numb1 = document.querySelector(".numb1").value;
  const numb2 = document.querySelector(".numb2").value;
  const divResult = document.querySelector(".result");
  numb1SumNumb2(numb1, numb2, divResult);
});
