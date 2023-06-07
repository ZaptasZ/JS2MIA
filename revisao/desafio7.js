const leia = require("prompt-sync")();

let genero = leia("Digite o aluno ou a para aluna: ").toUpperCase();
let nome = leia("Qual é seu nome: ");
let nota = parseInt(leia("Coloque a sua nota: "));

if(genero == "O"){
    if(nota<=5){
        console.log("Oi aluno " + nome + " ainda não passou de ano com a nota " + nota)
    }
    else{
        console.log("Oi aluno " + nome + " passou de ano com a nota " + nota)
    }
}
else{
    if(nota<=5){
        console.log("Oi aluna " + nome + " ainda não passou de ano com a nota " + nota)
    }
    else{
        console.log("Oi aluna " + nome + " passou de ano com a nota " + nota)
    }
}

