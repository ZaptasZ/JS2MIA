class Retangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    mostrarArea(){
        console.log("A base é :" + (this.altura * this.base));
    }
}

//programa principal

let objeto1 = new Retangulo(5, 3);
let objeto2 = new Retangulo(4, 2);

console.log("ÁREA DOS TRIANGULOS");

console.log("Triangulo 1");
objeto1.mostrarArea();

console.log("Triangulo 2");
objeto2.mostrarArea();