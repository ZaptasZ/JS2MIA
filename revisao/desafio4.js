const leia = require("prompt-sync")();

let valor1 = parseInt(leia("Coloque o primeiro número: "));
let valor2 = parseInt(leia("Coloque o segundo número: "));
let valor3 = valor1 + valor2;

console.log("O resultado da soma dos dois valores é: " + valor3);
