//====================== CRIAR OBJETO (JSON) ALUNO =================
let alunos = {
    nome: "Carlos Silva",
    idade: 16, 
    matricula: 20224567,
    ausente: true
};
console.log(alunos);// Imprimir a estrutura
console.log(alunos.nome); // Imprimir uma chave
console.log("Nome do aluno: %s", alunos.nome);
console.log("Matricula do aluno: %s", alunos.idade); 

let aluno1 = {
    nome: "Ana",
    idade: 15,
    matricula: 20224568,
    ausente: true
};

let turma = [alunos, aluno1]; // Criar um array de objetos (JSON)
console.log(turma);
console.log("Nome do segundo aluno da turma: %s", turma[1].nome);
//===================================================================
//====================== CRIAR ARRAY DE NÚMEROS =================