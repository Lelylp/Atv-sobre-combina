let operador;
while (operador != 0) {
    console.log('1: Soma');
    console.log('2: Subtração');
    console.log('3: Multiplicação');
    console.log('4: Divisão');
    console.log('0: Sair');
    operador=require('readline-sync').questionInt('Digite o número da operaçao que deseja fazer\n')
    calculadora(operador);
}

function calculadora(operador) {
    let a, b;
    switch (operador) {
        case 1:
            a=require('readline-sync').questionInt('Digite um número: ')
            b=require('readline-sync').questionInt('Digite outro número: ')
            console.log(`Seu resultado é ${a+b}\n`);
            break;

        case 2:
            a=require('readline-sync').questionInt('Digite um número: ')
            b=require('readline-sync').questionInt('Digite outro número: ')
            console.log(`Seu resultado é ${a-b}\n`);
            break;

        case 3:
            a=require('readline-sync').questionInt('Digite um número: ')
            b=require('readline-sync').questionInt('Digite outro número: ')
            console.log(`Seu resultado é ${a*b}\n`);
            break;

        case 4:
            a=require('readline-sync').questionInt('Digite um número: ')
            b=require('readline-sync').questionInt('Digite outro número: ')
            console.log(`Seu resultado é ${a/b}\n`);
            break;

        case 0:
            console.log('Saindo do programa');
            break;

        default:
            console.log("Essa opção não existe\n");
            break;
    }
}