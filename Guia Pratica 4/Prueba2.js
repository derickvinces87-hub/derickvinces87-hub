//1. Contar número total de palabras
function contarPalabras(frase) {
    let contador = 0;
    if (frase.length > 0) contador = 1;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === " ") contador++;
    }
    alert("La frase tiene " + contador + " palabras.");
}

//2. Contar signos de puntuación
function contarSignosPuntuacion(frase) {
    let signos = ".,;:!?¡¿\"'()-";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (signos.includes(frase[i])) contador++;
    }
    alert("La frase tiene " + contador + " signos de puntuación.");
}

//3. Contar vocales
function contarVocales(frase) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase[i])) contador++;
    }
    alert("La frase tiene " + contador + " vocales.");
}

//4. Contar consonantes
function contarConsonantes(frase) {
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (consonantes.includes(frase[i])) contador++;
    }
    alert("La frase tiene " + contador + " consonantes.");
}

//5. Contar dígitos
function contarDigitos(frase) {
    let digitos = "0123456789";
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (digitos.includes(frase[i])) contador++;
    }
    alert("Cantidad de dígitos: " + contador);
}

//6. Palabras que empiezan con mayúscula
function contarMayusculasIniciales(frase) {
    let contador = 0;
    if (frase[0] >= "A" && frase[0] <= "Z") contador++;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === " " && i + 1 < frase.length) {
            let siguiente = frase[i + 1];
            if (siguiente >= "A" && siguiente <= "Z") contador++;
        }
    }
    alert("Palabras con mayúscula inicial: " + contador);
}

//7. Palabras que empiezan con minúscula
function contarMinusculasIniciales(frase) {
    let contador = 0;
    if (frase[0] >= "a" && frase[0] <= "z") contador++;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === " " && i + 1 < frase.length) {
            let siguiente = frase[i + 1];
            if (siguiente >= "a" && siguiente <= "z") contador++;
        }
    }
    alert("Palabras con minúscula inicial: " + contador);
}

//8. Contar párrafos
function contarParrafos(texto) {
    let contador = 1;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "\n") contador++;
    }
    alert("El texto tiene " + contador + " párrafos.");
}

//9. Invertir texto
function invertirTexto(frase) {
    let invertido = "";
    for (let i = frase.length - 1; i >= 0; i--) {
        invertido += frase[i];
    }
    alert("Texto invertido: " + invertido);
}

//10. Contar todos los caracteres
function contarCaracteres(frase) {
    alert("Total de caracteres: " + frase.length);
}

//11. Buscar palabra
function buscarPalabra(texto, palabra) {
    if (texto.includes(palabra)) {
        alert("La palabra '" + palabra + "' sí se encuentra en el texto.");
    } else {
        alert("La palabra '" + palabra + "' NO se encuentra en el texto.");
    }
}

//12. Contar un carácter en el texto
function contarCaracter(texto, caracter) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) contador++;
    }
    alert("El carácter '" + caracter + "' aparece " + contador + " veces.");
}

//13. Contar caracteres en posiciones pares
function contarPares(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 === 0) contador++;
    }
    alert("Caracteres en posiciones pares: " + contador);
}

//14. Contar caracteres en posiciones impares
function contarImpares(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 !== 0) contador++;
    }
    alert("Caracteres en posiciones impares: " + contador);
}

//15. Añadir texto al inicio o al final
function añadirTexto(texto, fragmento) {
    let alInicio = fragmento + " " + texto;
    let alFinal = texto + " " + fragmento;
    alert("Al inicio: " + alInicio + "\nAl final: " + alFinal);
}

