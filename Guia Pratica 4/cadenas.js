//Este archivo a sido realizado por: Derick Lizandro Vinces Ronquillo.
//Carrera: Ingnieria de software.
//Universidad: Universidad Estatal de Milagro (UNEMI).
//Asignatura: Algoritmo y logica de programacion.
//Paralelo: B1
//Docente: MSc. Daniel Vera.
//Guia pratica N°4: Cadenas.
//Fecha de creacion: 17/11/2025
//Fecha entrega: 19/11/2025

//1. Contar numero total de palabras.
function contarPalabras() {
    let frase = prompt("Ingrese una frase: ");
    let contador = 0;
    // Si la frase no está vacía, empezamos con 1 palabra
    if (frase.length > 0) {
        contador = 1;
    }
    for (let i = 0; i < frase.length; i++) {
        // Cada vez que encontramos un espacio, sumamos una palabra
        if (frase[i] === " ") {
            contador++;
        }
    }
    alert("La frase tiene " + contador + " palabras.");
}
contarPalabras();
//2. Contar signos de puntuacion.
function contarSignosPuntuacion() {
    let frase = prompt("Ingrese una frase: ");
    let signosPuntuacion= ".,;:!?¡¿\"'()-";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (signosPuntuacion.includes(frase[i])) {
            contador++;
        }
    }
    alert("La frase tiene " + contador + " signos de puntuación.");
}
contarSignosPuntuacion();
//3.Contar vocales.
function contarVocales() {
    let frase = prompt("Ingrese una frase: ");
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i])) {
            contador++;
        }   
    }
}
contarVocales();
//4.Contar consonantes.
function contarConsonantes() {
    let frase = prompt("Ingrese una frase: ");
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (consonantes.includes(frase[i])) {
            contador++;
        }
    }
    alert("La frase tiene " + contador + " consonantes.");
}
contarConsonantes();
//5.Contar digitos.
function contarDigitos() {
    let frase = prompt("Ingrese una frase: ");
    let digitos = "0123456789";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (digitos.includes(frase[i])) {
            contador++;
        }
    }
    alert("Cantidad de dígitos: " + contador);
}
contarDigitos();
//6.Contar palabras que empiezan con mayuscula.
function contarMayusculasIniciales() {
    let frase = prompt("Ingrese una frase: ");
    let contador = 0;
    // Revisar la primera letra de la frase
    if (frase[0] >= "A" && frase[0] <= "Z") {
        contador++;
    }
    for (let i = 0; i < frase.length; i++) {
        // Si encontramos un espacio, revisamos la siguiente letra
        if (frase[i] === " " && i + 1 < frase.length) {
            let siguiente = frase[i + 1];
            if (siguiente >= "A" && siguiente <= "Z") {
                contador++;
            }
        }
    }
    alert("Palabras con mayúscula inicial: " + contador);
}
contarMayusculasIniciales();
//7.Contar palabras que empiezan con minuscula.
function contarMinusculasIniciales() {
    let frase = prompt("Ingrese una frase: ");
    let contador = 0;
    // Revisar la primera letra de la frase
    if (frase[0] >= "a" && frase[0] <= "z") {
        contador++;
    }   
    for (let i = 0; i < frase.length; i++) {
        // Si encontramos un espacio, revisamos la siguiente letra
        if (frase[i] === " " && i + 1 < frase.length) {
            let siguiente = frase[i + 1];
            if (siguiente >= "a" && siguiente <= "z") {
                contador++;
            }
        }
    }
    alert("Palabras con minúscula inicial: " + contador);
}
contarMinusculasIniciales();
//8.Contar parrafos.
function contarParrafos() {
    let texto = "Hola mundo\nEsto es un segundo párrafo\nY este es un tercero";
    let contador = 1;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === '\n') {
            contador++;
        }
    }
    alert("El texto tiene " + contador + " párrafos.");
}
contarParrafos();
//9.Invertir texto completo.
function invertirTexto() {
    let frase = prompt("Ingrese una frase: ");
    let textoInvertido = "";
    for (let i = frase.length - 1; i >= 0; i--) {
        textoInvertido += frase[i];
    }   
    alert("Texto invertido: " + textoInvertido);
}
invertirTexto();
//10.Contar todos los caracteres.
function contarCaracteres() {
    let frase = prompt("Ingrese una frase: ");
    let total = frase.length; // cuenta todos los caracteres
    alert("Total de caracteres: " + total);
}
contarCaracteres();



