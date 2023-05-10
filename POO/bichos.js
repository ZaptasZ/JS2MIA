class Animal{
    constructor(tipo,porte,femea,anoNascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.anoNascimento = anoNascimento;
    }

    fazerBarulho(){
        console.log("fazendo barulho...")
    }

    retornaIdade(anoAtual){
        return anoAtual - this.anoNascimento
    }
}

class Gato extends Animal{
    constructor(tipo,raca,cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor;
    }

    miar(){
        console.log("miando...")
    }
}

class Cachorro extends Animal{
    constructor(tipo, raca, cor){
        super(tipo);
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("latindo...")
    }
}


//PROGRAMA PRINCIPAL

let bicho1 = new Animal("mamifero", "medio", false, 2020);
let gato1 = new Gato("felino","sphynx", "cinza");
let cachorro1 = new Cachorro("Mamifero", "Vira-lata", "preto")


console.log(bicho1);
console.log(bicho1.porte);
console.log(gato1);
console.log(cachorro1);

bicho1.fazerBarulho();
gato1.miar();
cachorro1.latir();
cachorro1.anoNascimento = 2021;
gato1.anoNascimento = 2020;
console.log(cachorro1.retornaIdade(2023));
console.log((gato1.retornaIdade(2023)));




