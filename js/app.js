function calcularIMC() {
  //ALTURA DIVIDIDO POR 100//
  const alturaNumber = document.getElementById("altura-number").value / 100;
  const pesoNumber = document.getElementById("peso-number").value;
  const resultado = pesoNumber / alturaNumber ** 2;
  const txtResult = document.getElementById("txt-result");
  const txtResultado = document.getElementById("txt-resultado")
  if (resultado < 18.5) {
    txtResult.innerHTML = "Abaixo do peso normal";
  } else if (resultado < 24.9) {
    txtResult.style.animationPlayState = "paused";
    txtResult.style.opacity="100"
    txtResult.innerHTML = "Peso normal";
    txtResult.style.color = "Lime";

    console.log(txtResultado);
  } else if (resultado < 29.9) {
    txtResult.innerHTML = "Excesso de peso";
    txtResult.style.color = "GreenYellow";
  } else if (resultado < 34.9) {
    txtResult.innerHTML = "Obesidade classe 1";
    txtResult.style.color = "DarkGoldenrod";
  } else if (resultado < 39.9) {
    txtResult.innerHTML = "Obesidade classe 2";
    txtResult.style.color = "MediumVioletRed";
  } else if ((resultado) => 40) {
    txtResult.innerHTML = "Obesidade classe 3";
    txtResult.style.color = "DarkRed";
  }
  console.log(resultado);
}
