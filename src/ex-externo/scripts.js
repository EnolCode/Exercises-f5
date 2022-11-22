function calcularPrecio() {
  const product = document.getElementById("product");
  const iva = document.getElementById("iva");
  const button = document.getElementById("button");
  const resultado = document.getElementById("resultado");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (iva.value < 6 || iva.value > 21)
      return (resultado.innerHTML = "El IVA introducido es incorrecto");
    const productoFinal = parseInt(product.value);
    const ivaFinal = parseInt(iva.value);
    let result = `${(productoFinal / 100) * ivaFinal + productoFinal} `;
    resultado.innerHTML = `El resultado final será ${result}`;
  });
}

calcularPrecio();
