//Sem vetores
let equipe1 = "SPF";
let equipe2 = "SPFC";
let equipe3 = "SCCP";
let equipe4 = "SEP";

let ponto1 = 3;
let ponto2 = 3;
let ponto3 = 3;
let ponto4 = 3;

console.log("TIME \t PONTOS");
console.log(equipe1 + "\t" + ponto1);
console.log(equipe2 + "\t" + ponto2);
console.log(equipe3 + "\t" + ponto3);
console.log(equipe4 + "\t" + ponto4);

//Com vetores
let times = ['SPF', 'SPFC', 'SCCP', 'SEP'];
let pontos = ['3', '3', '3', '3'];

//console.log(times[1]);
//console.log(pontos[1]);

console.log("TIME \t PONTOS");
for(let i = 0; i < times.length; i++){
    console.log(times[i] + "\t" + pontos[i]);

}