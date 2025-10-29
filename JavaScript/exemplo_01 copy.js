//declarar ou iniciar estrutura de dados
let numeros = [1,2,3];
const Numbers = [4, 8];
//Mostrar e adicionar no fim da estrutura
console.log(numeros);
numeros.push(6);
console.log(numeros);
//Mostrar e remover no inicio da estrutura
numeros.shift(1);
console.log(numeros);
//Mostrar e adicionar no inicio da estrutura
numeros.unshift(-3);
console.log(numeros);
//Imprimir um elemento específico
console.log("mostrando: "+ numeros[3]);

// inserir um valor em uma posição específica do array
numeros.splice(2, 0, 17);
//===================================================================
// ARRAY DE MARCA DE CARROS
let garage = ["Ferrari","Audi","Porsche","Lamborghini","Rolls-Royce","Bentley","Maserati","Jaguar"];

console.log(garage[6]);

garage.push("Bugatti");

//console.log(garage[6]);

console.log("Tamanho do array: " + garage.length);

for (let i = 0; i < garage.length; i++) {
    console.log("Carro n° %d:", i+1);
    console.log("Marca: %s", garage[i]);
    
}

for (carro in garage) {
    console.log("Carro n° %d:", Number(carro)+1);
    console.log("Marca: %s", garage[carro]);
}