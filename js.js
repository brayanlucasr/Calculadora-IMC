function calcular() {
  let nome = document.getElementById("nome").value; //pegando o nome inserido no input.
  let altura = document.getElementById("altura").value; //pegando a altura inserida no input.
  let peso = document.getElementById("peso").value; //pegando o peso inserido no input.

  let alturax2 = altura * 2; //multiplicando a altura informada.
  let resultadoImc = (peso / alturax2).toFixed(1); //dividindo o peso multiplicado pelo peso informado.
  let classificacao = ""; //variavel que vai passar no if.
  //validando se todos os campos foram preenchidos.
  if (nome === "" || peso === "" || altura === "" || altura === "0") {
    return (document.getElementById("resultado").innerHTML =
      "Por favor, preencha todos os campos.");
  } else if (resultadoImc < 18.5) {
    classificacao = "você está abaixo do peso ideal";
  } else if (resultadoImc <= 24.9) {
    classificacao = "parabéns, você está em seu peso ideal";
  } else if (resultadoImc <= 29.9) {
    classificacao = "você está acima de seu peso (sobrepeso)";
  } else if (resultadoImc <= 34.9) {
    classificacao = "você está acima de seu peso (obesidade grau 1)";
  } else if (resultadoImc <= 39.9) {
    classificacao = "você está acima de seu peso (obesidade grau 2)";
  } else {
    classificacao = "você está acima de seu peso (obesidade grau 3)";
  }

  let resultadoNaTela = (document.getElementById(
    "resultado"
  ).innerHTML = `${nome} seu IMC é ${resultadoImc}, ${classificacao}.`);
}
