class Conta{
    constructor(numero,cpf,saldo,ativa){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativa = ativa;
    }

    ativarConta(){
        console.log("Ativando conta...")
    }

    debito(){
        console.log("Debitando...")
    }

    credito(){
        console.log("Adicionando crédito...")
    }

}

class Poupanca extends Conta{
    super(numero);

}

class Corrente extends Conta{
    super(numero);
    
}

class Especial extends Conta{
    super(numero);
    
}