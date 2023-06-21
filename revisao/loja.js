const leia = require("prompt-sync")();

let codigos = ["COD001","COD002", "COD003", "COD004", "COD005"];
let produtos = ["teclado", "mouse", "monitor", "cadeira", "CPUgame"];
let valor = [20, 10, 150, 700, 800];
let estoque = [0,0,0,0,0];
let vendas = [0,0,0,0,0];
let escolha = "";

//Parte do gerente
console.log("codigos\t\tprodutos\tvalor\t\testoque");

for(let i=0; i<codigos.length; i++ ){
    console.log(codigos[i] + "\t\t" + produtos[i] + "\t\t" + valor[i] + "\t\t" + estoque[i]);
}

for(let i=0; i<produtos.length; i++){
    estoque[i] = leia("Quantos " + produtos[i] + " tem no estoque? ");
    while(estoque[i]<0){
        estoque[i] = leia("Digite um valor positivo: ");
    }
}

//Parte de venda
console.log("codigos\t\tprodutos\tvalor\t\testoque");

for(let i=0; i<codigos.length; i++ ){
    console.log(codigos[i] + "\t\t" + produtos[i] + "\t\t" + valor[i] + "\t\t" + estoque[i]);
}

escolha = leia("Qual é o código que você deseja comprar? ").toUpperCase();

for(let i=0;i<codigos.length; i++){
    if(escolha==codigos[i]){
        console.log("Você escolheu " + produtos[i] + " temos " + estoque[i] + " no estoque");
        vendas[i] = leia("Quantos " + produtos[i] + " você quer comprar? ");
        while(vendas[i]>estoque[i] ){
            console.log("Não é possível realizar a compra, temos " + estoque[i] + " disponivel para esse produto")
            vendas[i] = leia("Quantos " + produtos[i] + " você quer comprar? ");
        }
        console.log("Você terá que pagar: " + (vendas[i] * valor[i]));
    }
}

