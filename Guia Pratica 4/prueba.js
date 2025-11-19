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
    alert("La frase tiene " + contador + " vocales.");
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
//11. Buscar una palabra en el texto.
function buscarPalabra() {
    // Pedir el texto completo
    let texto = prompt("Ingrese el texto:");
    // Pedir la palabra a buscar
    let palabra = prompt("Ingrese la palabra a buscar:");
    // Verificar si la palabra existe en el texto
    if (texto.includes(palabra)) {
        alert("La palabra '" + palabra + "' sí se encuentra en el texto.");
    } else {
        alert("La palabra '" + palabra + "' NO se encuentra en el texto.");
    }
}
buscarPalabra();
//12. Contar caracter en el texto.
function contarCaracter() {
    // Pedir el texto
    let texto = prompt("Ingrese el texto: ");
    // Pedir el carácter a buscar
    let caracter = prompt("Ingrese el carácter a contar: ");
    let contador = 0;
    // Recorremos el texto
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }
    alert("El carácter '" + caracter + "' aparece " + contador + " veces.");
}
contarCaracter();
//13.Contar caracteres en posiciones pares.
function contarPares() {
    // Pedir el texto
    let texto = prompt("Ingrese el texto:");
    let contador = 0;
    // Recorremos el texto
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 === 0) { // índice par
            contador++;
        }
    }
    alert("Caracteres en posiciones pares: " + contador);
}
contarPares();
//14.Contar caracteres en posiciones impares.
function contarImpares() {
    // Pedir el texto   
    let texto = prompt("Ingrese el texto:");
    let contador = 0;
    // Recorremos el texto
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 !== 0) { // índice impar
            contador++;
        }
    }
    alert("Caracteres en posiciones impares: " + contador);
}
contarImpares();
//15.Añadir un texto al inicio o al final.
function añadirTexto() {
    // Pedir el texto original
    let texto = prompt("Ingrese el texto:");
    // Pedir el fragmento a añadir
    let fragmento = prompt("Ingrese el fragmento a añadir:");
    // Concatenar al inicio y al final
    let alInicio = fragmento + " " + texto;
    let alFinal = texto + " " + fragmento;
    // Mostrar resultados
    alert("Al inicio: " + alInicio + "\nAl final: " + alFinal);
}
añadirTexto();
//Fin del codigo.







