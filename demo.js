var canvas = document.querySelector("#canva");
var consola = document.querySelector(".consola");
var contenedorGeneral = document.querySelector(".ahorcado")





function ahorcado() {

    // Array de palabras aleatorias

    var palabras = [
        "escuela",
        "colegio",
        "casa",
        "cocina",
        "ordenador",
        "silla"
    ]

    // Número Random

    palabraAleatoria = Math.floor(Math.random() * 6);

    palabras[palabraAleatoria];

    console.log(palabras[palabraAleatoria]);

    // Recorrer el tamaño de la palabra

    var recorrido = palabras[palabraAleatoria].length - 1;

    console.log(recorrido);

    for (let letra of recorrido) {
        palabraMostrar.push('_');
    }
}
// https://programadorwebvalencia.com/ahorcado-en-javascript-es6-comentado/
ahorcado();
