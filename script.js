"Ejercicio de lógica 1"
//vamos equipooo uu 
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ingrese el tercer número: "));

let numerosunu= [num1,num2,num3];

let mayor= Math.max(...numerosunu);
let menor =Math.min(...numerosunu);
let centro= numerosunu.find(num => num != mayor && num != menor);

if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
}
console.log("De mayor a menor: ",numerosunu.sort((a, b) => b - a));
console.log("De menor a mayor: ",numerosunu.sort((a, b) => a - b));

