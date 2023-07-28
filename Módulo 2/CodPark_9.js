let voto, nulo = 7, vencedor, confirmacao, candidato_X = 101, candidato_Y = 100, candidato_Z = 100, branco = 50;
do {
    console.log("Digite o número do candidato que deseja dar seu voto ?");
    console.log("- candidato_X => 889 \n- candidato_Y => 847\n- candidato_Z => 515\n- branco => 0");
    voto = require('readline-sync').question("Seu voto: ");
    if (isNaN(voto)) {
        console.log("Nada de caracteres, vote novamente\n");
    }else{
        confirmacao = require('readline-sync').question("Deseja finalizar a votação ?(S/N)\n");
        confirmacao = confirmacao.toLowerCase();
        if (confirmacao === 'n') {
            console.log("");
        }
    }
    
} while (confirmacao !== 's');

switch (voto) {
    case 0:
        branco +=1;
        break;

    case 889:
        candidato_X +=1;
        break;

    case 847:
        candidato_Y +=1;
        break;

    case 515:
        candidato_Z +=1;
        break;
    default:
        nulo +=1
        break;
}

let candidatos = [candidato_X, candidato_Y, candidato_Z];
let numVotos = {'candidato_X':candidato_X, 'candidato_Y':candidato_Y, 'candidato_Z':candidato_Z, 'brancos':branco, 'nulos':nulo}

switch (Math.max(...candidatos)) {
    case candidato_X:
        vencedor = 'candidato_X'
        break;

    case candidato_Y:
        vencedor = 'candidato_Y'
        break;

    case candidato_Z:
        vencedor = 'candidato_Z'
        break;

    default:
        break;
}

console.log(`\nVencedor foi ${vencedor}`);
console.log("Votos:");
console.log(numVotos);