const leia = require("prompt-sync")();

let numero = 0;
let total = 0;
let maior = 0;
let contador = -1;

while(numero>=0){
    total += numero
    if(numero>maior){
        maior = numero
    }
    contador ++
    numero = parseInt(leia("Digite um numero: "))
}

console.log("Fim de pograma!")
console.log(total)
console.log(maior)
console.log(contador)
