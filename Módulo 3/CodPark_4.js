class Pessoa{
    constructor(Nome, Idade, Filho = "Sem filhos"){
        this.Nome = Nome;
        this.Idade = Idade;
        this.Filho = Filho;
        this.prox = null;
    }
}


class ListaPessoas{
    constructor(){
        this.prim = null;
    }

    addFirst(Nome, Idade, Filho){
        const newNo = new Pessoa(Nome, Idade, Filho);
        newNo.prox = this.prim;
        this.prim = newNo;
    }

    addLast(Nome, Idade, Filho) {
        const newNo = new Pessoa(Nome, Idade, Filho);
        if(!this.prim){
            this.prim = newNo
        }else{
            let current = this.prim;
            while (current.prox) {
                current = current.prox
            }
            current.prox = newNo
        }
    }

    removeFisrt(){
        if(!this.prim){
            return null;
        }
        const removedNo = this.prim;
        this.prim = this.prim.prox;
        removedNo.prox = null;
        return removedNo.Nome;
    }
    
    removeLast(){
        if(!this.prim){
            return null;
        } 
        if(!this.prim.prox){
            const removedNo2 = this.prim;
            this.prim = null;
            return removedNo2.Nome;
        }
        let current = this.prim;
        let previous = null;
        while(current.prox){
            previous = current;
            current = current.prox;
        }
        previous.prox = null;
        return current.Nome;
    }

    search(Nome){
        let current = this.prim;
        while(current){
            if(current.Nome === Nome){
                return current;
            }
            current = current.prox;
        }
        return null;
    }

    size(){
        let count = 0;
        let current = this.prim;
        while(current){
            count++;
            current = current.prox;
        }
        return count;
    }

    listar(){
        let current = this.prim;
        let num = 1;
        while(current){
            console.log(`Pessoa n° ${num}`);
            console.log(`Nome: ${current.Nome}`);
            console.log(`Idade: ${current.Idade}`);
            console.log(`Filho: ${current.Filho}`);
            console.log();
            current = current.prox;
            num++;
        }
    }

}

const lista = new ListaPessoas;
lista.addFirst("Weslley", 12);
lista.addLast("Rogerio", 33, ["Rebeca","Lucas"])
lista.listar();
