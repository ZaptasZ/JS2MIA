class Aviao{
    constructor(nome, capacidadePassa, peso, velocidade, velocidadeMax, ligado){
        this.nome = nome;
        this.capacidadePassa = capacidadePassa;
        this.peso = peso;
        this.velocidade = velocidade;
        this.velocidadeMax = velocidadeMax;
        this.ligado = ligado;
    }
    ligar(){
        console.log("Ligando....");
        this.ligado = true;
    }
}

let aviao1 = new Aviao("Boing 777", 500, "450kg", 200, 800, false)
let aviao2 = new Aviao("Boing 666", 450, 400, 300, 900, false)

aviao1.ligar()

console.log(aviao1)