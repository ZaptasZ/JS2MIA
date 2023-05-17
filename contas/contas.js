class Conta{
    constructor(numero,cpf,saldo,ativa){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativa = ativa;
    }

    ativarConta(){
        this.ativa = true;
    }

    debito(){
        if(this.ativa){
            if(valor<0){
                console.log("Impossivel realizar valor negativo...")
            }
            else if(valor == 0){
                console.log("Impossivel realizar valor zerado...")
            }
            else if(this.saldo < this.valor){
                console.log("Saldo insuficiente...")
            }
            else{
                this.saldo = this.saldo - valor
            }
        }
        else{
            console.log("Conta está inativa...")
        }
    }

    credito(valor){
        if(this.ativa){
            if(valor<0){
                console.log("Impossível realizar valor negativo...")
            }
            else if(valor == 0){
                console.log("Impossível realizar valor zerado...")
            }
            this.saldo += valor
        }
        else{
            console.log("Conta está inativa...")
        }
    }
}

const leia = require("prompt-sync")()
let op = ""
let valor = 0

let numero = parseInt(leia("Digite o numero da conta: "));
let cpf = leia("Digite o cpf: ");
let c1 = new Conta(numero, cpf, 0, false)

c1.ativarConta()
for (let x=1; x<=10; x++){
    console.log("Movimento " + x);
    console.log("Saldo da conta R$: " +c1.saldo);
    valor = parseInt(leia("Digite o valor : "))
    op = leia("Digite D para débito ou C para crédito: ").toUpperCase()

    if(op=="C"){
        c1.credito(valor)
    }
    else if(op == "D"){
        c1.debito(valor)
    }
}
console.log("Saldo Final da conta R$: " +c1.saldo);
