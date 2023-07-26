let nome, idade;
do {
    try {
        nome = require('readline-sync').question("Digite seu nome completo: ");
        if (nome.length<15) {
            throw new Error ("Nome muito pequeno");
        }
    } catch (error) {
        console.log(error);
    }
} while (nome.length<15);

do {
    try {
        idade = require('readline-sync').question("Digite seu ano de nascismento: ");
        if (parseInt(idade)<=1922 || parseInt(idade)>=2021) {
            throw new Error ("Fora do range(só é permitido 1922 a 2021)");
        }
        if(isNaN(idade)){
            throw new Error ("Somente números");
        }
    } catch (error) {
        console.log(error);
    }
} while (parseInt(idade)<=1922 || parseInt(idade)>=2021);


idade = 2022 - idade;
let pessoa = {nome, idade};
console.log(pessoa);