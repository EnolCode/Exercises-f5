// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

const button = document.querySelector(".button");

function numb1SumNumb2(num1, num2, num3, element) {
  const number1 = parseInt(num1);
  const number2 = parseInt(num2);
  const number3 = parseInt(num3);
  if (number1 > number2 && number1 > number3)
    return (element.innerHTML = `${number1} es mayor que ${number2} y que ${number3}.`);
  if (number2 > number1 && number2 > number3)
    return (element.innerHTML = `${number2} es mayor que ${number1}  y que ${number3}.`);
  if (number3 > number1 && number3 > number2)
    return (element.innerHTML = `${number3} es mayor que ${number1}  y que ${number2}.`);
  if (number3 === number1 && number3 === number2)
    return (element.innerHTML = `${number2} es igual que ${number1} y  que ${number3}.`);
}

button.addEventListener("click", () => {
  const numb1 = document.querySelector(".numb1").value;
  const numb2 = document.querySelector(".numb2").value;
  const numb3 = document.querySelector(".numb3").value;
  const divResult = document.querySelector(".result");
  numb1SumNumb2(numb1, numb2, numb3, divResult);
});
