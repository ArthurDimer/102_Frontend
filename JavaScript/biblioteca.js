//====================== CRIAR OBJETO (JSON) ALUNO =================
let livro1 = {
    titulo: "O diario de um banana",
    genero: "infantil",
    autor: "Jeff Kinney",
    ano: 2020
};
console.log(livro1);// Imprimir a estrutura
console.log(livro1.nome); // Imprimir uma chave
console.log("Nome do livro: %s", livro1.titulo);
console.log("Genero do livro: %s", livro1.genero); 

let livro2 = {
    titulo: "Peter pan",
    genero: "infantil",
    autor: "Charlie Kirk",
    ano: 2019
};

let biblioteca = [livro1, livro2]; // Criar um array de objetos (JSON)
console.log(biblioteca);
console.log("Nome do segundo livro da biblioteca: %s", biblioteca[1].titulo);
//===================================================================
//====================== CRIAR ARRAY DE NÚMEROS =================