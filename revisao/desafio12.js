const leia = require("prompt-sync")();

let nomes = ["", "", "", ""];
let notas = [0, 0, 0, 0];
let situacao = "";

for(let i=0; i<nomes.length; i++){
    nomes[i] = leia("Digite o nome do aluno(a): ");
    notas[i] = parseInt(leia("Agora, digite a nota do aluno(a): "));
}

console.log("Boletim");
console.log("NOME \t NOTA \t SITUAÇÃO");

for(let i=0; i<nomes.length; i++){
    if(notas[i]<5){
        situacao = "RECUPERAÇÃO"
    }
    else{
        situacao = "APROVADO"
    }

    console.log(nomes[i] + "\t" + notas[i] + "\t" + situacao)
}