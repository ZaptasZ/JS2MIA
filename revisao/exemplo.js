const leia = require("prompt-sync")();

let celcius = 0;
let kelvin = 0;

let nome = "";

nome = leia("Digite seu nome: ")
celcius = parseFloat(leia("Digite a temperatura em celcius: "));
kelvin = celcius + 273;
console.log("Olá " + nome + "A temperatura em kelvin é: " + kelvin);