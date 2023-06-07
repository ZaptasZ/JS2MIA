const leia = require("prompt-sync")();

let X1 = parseInt(leia("Coloque o primeiro número: "));
let X2 = parseInt(leia("Coloque o segundo número: "));
let Y1 = parseInt(leia("Coloque o terceiro número: "));
let Y2 = parseInt(leia("Coloque o quarto número: "));

let valorD = Math.sqrt(Math.pow(X2 - X1,2) + Math.pow(Y2 - Y1,2));

console.log("O resultado da expressão é: " + Math.round(valorD));
