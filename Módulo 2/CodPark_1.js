var Nota_1, Nota_2, Soma;

function mathMean(myList) {
  return myList.reduce(function(x, y) {return x + y;}, 0) / myList.length;
}

Nota_1 = Number(window.prompt('Digite a primeira nota'));
Nota_2 = Number(window.prompt('Digite a segunda nota'));
Soma = mathMean([Nota_1, Nota_2]);
window.alert(Soma);
if (Soma >= 7) {
  window.alert('Parabéns, você foi APROVADO');
} else {
  window.alert('Infelizmente, você foi REPROVADO');
}