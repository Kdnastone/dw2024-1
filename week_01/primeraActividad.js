/* Tema: Datos y Variables

Instrucciones:


1. Definir variables que almacenen los siguientes datos:

Un nombre: "Pepe"
Una edad: 25
Un precio: $99.90
Los nombres de tus series favoritas: "Dark", "Mr Robot", "Castlevania"
Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
*/
console.log("1. Definir variables que almacenen datos.");
console.log("Hecho");
let firstName = "Pepe";
let age = 25;
let price = 99.90;
let favoriteSeries = ["Dark", "Mr Robot", "Castlevania"];
let favoriteMovies = [
    {
        name: "Ratatouille",
        year: 2007,
        characters: ["Remy", "Alfredo Linguini", "Colette", "Skinner", "Anton Ego", "Emile"]
    },
    {
        name: "The Godfather",
        year: 1972,
        characters: ["Marlon Brando", "Al Pacino", "Diane Keaton", "John Cazale", "James Caan", "Robert Duvall"]
    },
    {
        name: "Chihiro's journey",
        year: 2001,
        characters: ["Chihiro", "Haku", "Yubaba", "Kamaji", "Kaonashi", "Bö"]
    }
];
console.log("-----");

// 2. Mostrar todos esos valores por consola.
console.log("2. Mostrar todos esos valores por consola.");
console.log(`Nombre: ${firstName}`);
console.log(`Edad: ${age}`);
console.log(`Precio: $${price}`);
console.log(`Series Favoritas: ${favoriteSeries.join(", ")}`);
console.log('Películas Favoritas:');
favoriteMovies.forEach(movie => {
    console.log(`Nombre: ${movie.name}`);
    console.log(`Año: ${movie.year}`);
    console.log(`Personajes: ${movie.characters.join(", ")}`);
    console.log("***");
});

// 3. Incrementar la edad en 1 y volver a mostrarla.
console.log("3. Incrementar la edad en 1 y volver a mostrarla.");
let currentAge = 45;
console.log(`Edad Actual: ${currentAge} años`);
currentAge += 1; // Addition - Concatenation
console.log(`Edad incrementada en 1: ${currentAge} años`);
console.log("-----");

// 4. Agregar una serie a la lista de series favoritas y volver a mostrarla.
console.log("4. Agregar una serie a la lista de series favoritas y volver a mostrarla.");
favoriteSeries.push("Frieren: Más allá del final del viaje");
console.log(`Series Favoritas (Actualizada): ${favoriteSeries.join(", ")}`);