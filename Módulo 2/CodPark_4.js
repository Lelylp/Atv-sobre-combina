var Quant_de_rodas, Peso_bruto_Kg, Quant_pessoas_veiculo;

Quant_de_rodas = Number(window.prompt('Informe a quantidade de rodas do veiculo'));
if (Quant_de_rodas == 0) {
  window.alert('É graça ?');
} else if (Quant_de_rodas == 1) {
  window.alert('Monociclo ? ');
} else if (Quant_de_rodas == 2 || Quant_de_rodas == 3) {
  window.alert('Categoria tipo A');
} else {
  Peso_bruto_Kg = Number(window.prompt('Informe o peso bruto do veiculo'));
  Quant_pessoas_veiculo = Number(window.prompt('Informe a quantidade de pessoas para o veiculo'));
  if (Quant_de_rodas == 4 && Quant_pessoas_veiculo <= 8 && Peso_bruto_Kg <= 3500) {
    window.alert('Categoria tipo B');
  } else if (Peso_bruto_Kg >= 3500 && Peso_bruto_Kg <= 6000) {
    window.alert('Categoria tipo C');
  } else if (Quant_pessoas_veiculo >= 8) {
    window.alert('Categoria tipo D');
  } else {
    window.alert('Seu veículo tem mais de 4 rodas e mais de 6000 Kg, sua categoria será E');
  }
}
