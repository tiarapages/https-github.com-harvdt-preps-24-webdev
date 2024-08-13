// init js :D
console.log("Hello, World!");

// Variabel dan tipe data
var name = "MABA 24";
const age = 24;
let isStudent = true;

// Operator
let sum = 10 + 5;
let isEqual = (5 === 5);
let result = isStudent && (age > 18);

// ELIF
if (age > 18) {
    console.log("ya tua");
} else {
    console.log("muda");
}

// Ternary
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// Definisi dan deklarasi fungsi
function greet(name) {
    return `Hello, ${name}!`;
}

// Fungsi anonim
const add = function (a, b) {
    return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

console.log(greet("Maba 24"));
console.log(add(5, 3));
console.log(multiply(4, 2));

// Objek
let person = {
    name: "Maba 24",
    age: 30,
    greet: function () {
        return `Hello, I'm ${this.name}`;
    }
};

// Array
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);

// Iterasi
numbers.forEach(num => console.log(num));

console.log(person.greet());

