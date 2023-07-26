let nome, idade;
do {
    nome = require('readline-sync').question("Digite seu nome completo: ");
    if (nome.length<15) {
        console.log("Nome muito pequeno");
    }
} while (nome.length<15);
console.log(typeof(nome));
do {
    idade = require('readline-sync').questionInt("Digite seu ano de nascismento: ");
    if (idade<=1922 || idade>=2021) {
        console.log("Fora do range");
    }
} while (idade<=1922 || idade>=2021);
idade = 2022 - idade;
let pessoa = {nome, idade};
console.log(pessoa);