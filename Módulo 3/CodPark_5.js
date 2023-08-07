function buscaBinaria(array, elementoBuscado){
    let inicio = 0;
    let fim = array.length - 1;

    while(inicio<=fim){
        const meio = Math.floor((inicio+ fim)/ 2);

        if(array[meio] === elementoBuscado){
            return meio;
        }

        if(array[meio] > elementoBuscado){
            fim = meio - 1;
        }else{
            inicio = meio + 1;
        }
    }
    return -1;
}

const listaNumeros =  [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoProcurado = 20;
const indiceEncontrado = buscaBinaria(listaNumeros, elementoProcurado);
if (indiceEncontrado !== 1) {
    console.log(`O elemento ${elementoProcurado} foi encontrado no indice ${indiceEncontrado}.`);
} else {
    console.log(`O elementeo ${elementoProcurado} nao foi encontrado na lista.`);
}