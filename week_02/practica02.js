/* console.log("-----");
let decremento = 6;
decremento++;
console.log(decremento);
console.log("-----");

// 1. Importar el módulo readline para capturar la entrada del usuario desde la consola en Node.js
const readline = require('readline');

// 2. Confrigurar readline para capturar la entrada desde la terminal de la carpeta
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 3. Solicitar al usuario que ingrese la calificación
rl.question("Ingrese la calificación de 0 a 50: ", function(input) {
    // Convertir la entrada a un número
    const points = parseFloat(input);

    // Verifica si la entrada es un número válido
    if (isNaN(points)) {
        console.log("Por favor, ingrese un número válido.");
    } else {
        let score = (points >= 45) ? "A" :
                    (points >= 40) ? "B" :
                    (points >= 30) ? "C" :
                    (points >= 20) ? "D" : "F" ;

        console.log(`La calificación es: ${score}`);
    }

// 4. Cerrar la interfaz de readline
    rl.close();  
});

console.log("-----");
const array = [1, 2, 3, 4];

// Desestructuración de array
const [a, b, c] = array;

console.log(a);
console.log(b);
console.log(c);
*/

let a = 3;
let b = 8;

let c = a;
a = b
b = c;

console.log(a);
console.log(b);
