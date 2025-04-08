//quando quiser repetir o codigo varias vezes
for (let index = 0; index < 10; index++){
    console.log(index);
}

//até 10
for (let index = 0; index <= 10; index++){
    console.log(index);
}

const cars = ["Ferrari", "Tesla", "Mercedes"];
for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//mesmo que acima, mas melhor pra trabalhar com listas
for (let car of cars) { //pra cada carro na lista de carros
    console.log(car);
}

//mesmo que acima mas agora vem om cindex junto

cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
})

//WHILE executa o código enquanto a condição for verdadeira
let index = 0;

while (index < 10) {
    console.log("index é menor do que 10!");
    
    //index = index + 1;
    //index +=1;

    //mesma coisa que acima
    index++;
}

//FOR IN - pra trabalhar principalmente com objetos
const person = {
    name: "Jane",
    age: 21,
};

//mas não são rápidos
//mostra name e age
for (property in person) {
    console.log(person);
}

//mostra o que está dentro de name e age
for (property in person) {
    console.log(person[property]);
}

//TERNARY OPERATOR
const sum3 = 1 + 2;

/*
if (sum === 2) {
    number = 2; 
} else {
    number = 4;
}
console.log(number);
*/

//mesma coisa que acima:
let number = sum3 === 2 ? 2 : 4;
console.log(number);


const car = "Tesla";
switch (car) {
    case "Mercedes":
        console.log("Mercedes is beautiful");
        break;
    case "Ferrari":
        console.log("Ferrari is very red");
        break;
    case "Tesla":
        console.log("Tesla is very smart");
        break;
}
//FALSE
const x = ''; //string vazia sempre vai ser falso
console.log(!!x);

const y = 0; // 0 vai ser false
console.log(!!y);

const a = null;
const b = undefined;
console.log(!!a);
console.log(!!b);


//TRUE
const list = []; //uma lista vazia é true
console.log(!![]);
console.log(!list); //false porque o ! inverte o valor

const object = {};
console.log(!!object);

//checar se a lista tem algum valor
if (list.length > 0) {
    console.log(list);
}

//FUNÇÕES

const sumValue = sum(2, 2);
console.log(sumValue);

//ou
function sum(a, b = 10) {
    return a + b;
}
const sumValue1 = sum(2);
console.log(sumValue1);

//ARROW FUNCTIONS - mais moderno | mesma coisa que acima
const sumArrow = (a, b = 10) => {
    return a + b;
};
//mesma coisa que acima
const sumArrow2 = (a, b = 10) => a + b;

const sumValor = sumArrow2(2);
console.log(sumValue);