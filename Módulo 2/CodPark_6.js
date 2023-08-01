function calculadora(a, b, operador) {
    switch (operador) {
        case '+':
            return a+b;

        case '-':
            return a-b;

        case '*':
            return a*b;

        case '/':
            return a/b;

        default:
            return 0;
    }
}

let num1 = parseFloat(require('readline-sync').question("Digite um número\n"));
let num2 = parseFloat(require('readline-sync').question("Digite outro número\n"));
let operador = require('readline-sync').question("digite o operador que deseja utilizar (+, *, /, -)\n");
let resultado = calculadora(num1,num2,operador);
console.log(`Seu resultado é ${resultado}`);
