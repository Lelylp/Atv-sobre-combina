function calculadora(a, b, operador) {
    switch (operador) {
        case '+':
            return a+b;
            break;

        case '-':
            return a-b;
            break;

        case '*':
            return a*b;
            break;

        case '/':
            return a/b;
            break;

        default:
            return 0;
            break;
    }
}

let num1 = parseFloat(require('readline-sync').question("Digite um número\n"));
let num2 = parseFloat(require('readline-sync').question("Digite outro número\n"));
let operador = require('readline-sync').question("digite o operador que deseja utilizar (+, *, /, -)\n");
let resultado = calculadora(num1,num2,operador);
console.log(`Seu resultado é ${resultado}`);