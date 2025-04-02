//Strings

// const ou let
const firstName = "Filipe";
const lastName = "Gil";

console.log("Meu nome é " + firstName + " " + lastName);
console.log(`Meu nome é: ${firstName.toUpperCase()} ${lastName.toLowerCase()}`);//melhor jeito

//lista
const names = "Filipe,Ana,Estevão";

console.log(names.split(","));

//números

const num = 5;

console.log((num/2)*5);

//toString converte para string
//typeof tipo da var

//introducao vetor
const lista = ["Filipe","Ana","Estevão", 10, false];
const ana = lista[1];

//adicionar no vetor 
lista.push('Pedro');
//.unshift coloca no início
//.shift retira
console.log(lista);
// removo o último
lista.pop();
//mudar valores na lista
lista[2] = "Mariana";
//retorna a posição
console.log(lista.indexOf("Filipe"));
//ordem alfabética
const ordenado = lista.sort();
console.log(ordenado);
//quantidade de itens no vetor
console.log(lista.length);
//verificar se é um vetor
const listaIsArray = Array.isArray(lista);
console.log(listaIsArray);

//introducao vetor 2
// map executa uma função para cada item 
const numeros = [1,2,3,4,5];

const numerosMultiplicadosPorDois = numeros.map(function(numero) {
    return numero * 2;
})
console.log(numerosMultiplicadosPorDois);

//retorna um lista basado no filtro adicionado
const idades = [8,15,18,28,32,45];

const idadesPares = idades.filter(function(idade) {
    return idade%2 === 0;
})

console.log(idadesPares);

//reduzir todo o vetor para um valor só
const somaDasIdades = idades.reduce(function(age,soma) {
    return soma + age;
}, 0);

console.log(somaDasIdades);

//criando um objeto

const person = {
    firstName : "Filipe",
    lastName : "Gil",
    age : "19",
    hobbies : ['Assistir F1', 'Jogar Futebol', 'Ler'],
    cat: {
        nome: "Maga",
        idade: "5",
    }
};
/*
const primeiroNome = person.firstName;
const ultimoNome = person.lastName;
const age = person.age;
const hobbies = person.hobbies;

isso tudo em cima, é a mesma coisa q isso:*/
const { 
    firstName: primeiroNome, 
    ultimoNome, 
    age, 
    hobbies, 
    cat:{idade: ageCat}
} = person

const ultimohob = person.hobbies[2];

console.log(primeiroNome);
console.log(ultimoNome);
console.log(age);
console.log(hobbies);
console.log(ultimohob);

//adicionar propriedade ao objeto
person.dog="Sofia";

console.log(person);
console.log(cat);
console.log(cat.nome);
console.log(ageCat);

//lista com objetos
const alunos = [
    {
        id:1,
        descricao:"Estudar programação",
        concluido:false
    },
    {
        id:2,
        descricao:"Ler",
        concluido:true
    },
    {
        id:3,
        descricao:"Treinar",
        concluido:true
    }
];

const descricaoAluno = alunos[2].descricao;
console.log(descricaoAluno);