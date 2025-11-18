//1. Contar número total de palabras
function contarPalabras(texto) {
    let contador = 0;
    if (texto.length > 0) {
        contador = 1;
    }
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " ") {
            contador++;
        }
    }
    return contador;
}

//2. Contar signos de puntuación
function contarSignosPuntuacion(texto) {
    let signosPuntuacion = ".,;:!?¡¿\"'()-";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (signosPuntuacion.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

//3. Contar vocales
function contarVocales(texto) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

//4. Contar consonantes
function contarConsonantes(texto) {
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (consonantes.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

//5. Contar dígitos
function contarDigitos(texto) {
    let digitos = "0123456789";
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (digitos.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

//6. Contar palabras que empiezan con mayúscula
function contarMayusculasIniciales(texto) {
    let contador = 0;
    if (texto[0] >= "A" && texto[0] <= "Z") {
        contador++;
    }
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " " && i + 1 < texto.length) {
            let siguiente = texto[i + 1];
            if (siguiente >= "A" && siguiente <= "Z") {
                contador++;
            }
        }
    }
    return contador;
}

//7. Contar palabras que empiezan con minúscula
function contarMinusculasIniciales(texto) {
    let contador = 0;
    if (texto[0] >= "a" && texto[0] <= "z") {
        contador++;
    }
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " " && i + 1 < texto.length) {
            let siguiente = texto[i + 1];
            if (siguiente >= "a" && siguiente <= "z") {
                contador++;
            }
        }
    }
    return contador;
}

//8. Contar párrafos
function contarParrafos(texto) {
    let contador = 1;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === "\n") {
            contador++;
        }
    }
    return contador;
}

//9. Invertir texto completo
function invertirTexto(texto) {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return invertido;
}

//10. Contar todos los caracteres
function contarCaracteres(texto) {
    return texto.length;
}

//11. Buscar una palabra en el texto
function buscarPalabra(texto, palabra) {
    if (texto.includes(palabra)) {
        return true;
    } else {
        return false;
    }
}

//12. Contar un carácter en el texto
function contarCaracter(texto, caracter) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

//13. Contar caracteres en posiciones pares
function contarPares(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }
    return contador;
}

//14. Contar caracteres en posiciones impares
function contarImpares(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (i % 2 !== 0) {
            contador++;
        }
    }
    return contador;
}

//15. Añadir un texto al inicio o al final
function añadirTexto(texto, fragmento) {
    let alInicio = fragmento + " " + texto;
    let alFinal = texto + " " + fragmento;
    return { inicio: alInicio, final: alFinal };
}
