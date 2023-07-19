var Nome, Nota_1, Nota_2, Notas, Quant_faltas;

function mathMean(myList) {
  return myList.reduce(function(x, y) {return x + y;}, 0) / myList.length;
}


Nome = Number(window.prompt('Informe o nome do aluno'));
Nota_1 = Number(window.prompt('Informe a primeira nota'));
Nota_2 = Number(window.prompt('Informe a segunda nota nota'));
Notas = mathMean([Nota_1, Nota_2]);
Quant_faltas = Number(window.prompt('Informe a quantidade de faltas(sem mentir hein)'));
if (Quant_faltas > 3) {
  window.alert('Infelizmente, você REPROVOU');
} else if (Notas < 6.9) {
  window.alert('Infelizmente, você REPROVOU');
} else {
  window.alert('Parabéns, você está APROVADO');
}