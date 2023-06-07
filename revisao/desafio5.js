const leia = require("prompt-sync")();

let valorA = parseInt(leia("Coloque o primeiro número: "));
let valorB = parseInt(leia("Coloque o segundo número: "));
let valorC = parseInt(leia("Coloque o terceiro número: "));

let valorR = Math.pow((valorA + valorB), 2);
let valorS = Math.pow((valorB + valorC), 2);

let valorD = ((valorR + valorS)/2);

console.log("O resultadao da expressão é: " + valorD);