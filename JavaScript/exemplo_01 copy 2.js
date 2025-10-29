let numeros = [1,2,3];
const Numbers = [4, 8];

console.log(numeros);
numeros.push(6);
console.log(numeros);

numeros.shift(); // Remove o primeiro elemento
console.log(numeros);

numeros.unshift(-3); // Adiciona -3 no início
console.log(numeros);

console.log("mostrando: " + numeros[3]);

numeros.splice(2, 0, 17); // Insere 17 na posição 2

// ARRAY DE FRUTAS
let garage = ["Laranja", "Maçã", "Uva", "Banana", "Pêra"];

console.log(garage[4]);

garage.push("Abacaxi");

console.log("Tamanho do array: " + garage.length);

// Loop com índice
for (let i = 0; i < garage.length; i++) {
    console.log("Fruta n° %d:", i+1);
    console.log("Marca: %s", garage[i]);
}

// Loop com for...in
for (carro in garage) {
    console.log("Fruta n° %d:", Number(carro)+1);
    console.log("Marca: %s", garage[carro]);
}