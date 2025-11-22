//Este archivo a sido realizado por: Derick Lizandro Vinces Ronquillo.
//Carrera: Ingnieria de software.
//Universidad: Universidad Estatal de Milagro (UNEMI).
//Asignatura: Algoritmo y logica de programacion.
//Paralelo: B1
//Docente: MSc. Daniel Vera.
//Guia practica #3; Semana 10.
//Fecha de creacion: 09/11/2025
//Fecha entrega: 11/11/2025

//Series numericas
//Bloque 1: Ejercicios individuales (un solo numero)
//Ejercicio 1: Serie de Fibonacci
function Fibonacci(){
    let n = parseInt(prompt("Ingrese la cantidad de terminos de la serie Fibonacci que desea generar: "));
    let a = 0, b = 1, siguiente;
    console.log("Serie de Fibonacci:");
    for (let i=0; i<n; i++){
        console.log(a);
        siguiente = a+b;
        a=b;
        b=siguiente;
    }
}
Fibonacci();

//Ejercicio 2: Divisores de un numero
function Divisores(){
    let numero = parseInt(prompt("Ingrese un numero para encontrar sus divisores: "));  
    console.log("Los divisores de " + numero + " son:");
    for (let i=1; i<=numero; i++){
        if (numero % i === 0){
            console.log(i);
        }
   } 
}
Divisores();

//Ejericio 3: Suma de los divisores de un numero
function SumaDivisores(){
    let numero = parseInt(prompt("Ingrese un numero para calcular la suma de sus divisores: "));
    let suma = 0;   
    for (let i=1; i<=numero; i++){
        if (numero % i === 0){
            suma += i;
        }
    }
    console.log("Numero ingresado: " + numero);
    console.log("La suma de los divisores de " + numero + " es: " + suma);
}
SumaDivisores();

//Ejercicio 4: Numero perfecto
function NumeroPerfecto(){
    let numero = parseInt(prompt("Ingrese un numero para verificar si es perfecto: "));
    let suma = 0;
    for (let i=1 ; i<numero; i++){
        if (numero % i === 0){
            suma += i;
        }
   }
    if (suma === numero){
        console.log("El numero " + numero + " es un numero perfecto.");
    }else{
        console.log("El numero " + numero + " no es un numero perfecto.");
    }
}
NumeroPerfecto();

//Ejercicio 5: Numero primo
function NumeroPrimo(){
    let numero = parseInt(prompt("Ingrese un numero para verificar si es primo: "));
    let contador = 0;
    for (let i=1; i<=numero; i++){
        if (numero % i=== 0){
            contador++;
        }
    }
    if (contador === 2){
        console.log("El numero " + numero + " es un numero primo.");
    }else{
        console.log("El numero " + numero + " no es un numero primo.");
    }
} 
NumeroPrimo();

//Ejercicio 6: Invertir los digitos de un numero
function InvertirNumero(){
    let numero = prompt("Ingrese un numero para invertir sus digitos: ");
    let numeroInvertido = "";
    for (let i= numero.length -1; i>=0; i--){
        numeroInvertido += numero[i];
    }
    let resultado=parseInt(numeroInvertido);
    console.log("Numero invertido: " + resultado);
}
InvertirNumero();
function invertirNumeros() {
  let numero = parseInt(prompt("Ingrese un número para invertir:"));
  let invertido = 0;
    while (numero > 0) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }
  console.log("Número invertido:", invertido);
}
invertirNumeros();

//Ejercicio 7: Contar digitos de un numero
function ContarNumeros(){
    let numero= prompt("Ingrese un numero para contar sus digitos: ");
    let contador = 0;
    for (let i=0; i<numero.length; i++){
        contador++;
    }
    console.log("El numero " + numero + " tiene " + contador + " digitos.");
}
ContarNumeros();
function ContarDigitos(){
    let numero = parseInt(prompt("Ingrese un numero para contar sus digitos: "));
    let original = numero;
    let contador = 0;
    while (numero > 0){
        numero = Math.floor(numero / 10);
        contador++;
    }   
    console.log("El numero " + original + " tiene " + contador + " digitos.");
}
ContarDigitos();

//Ejercicio 8: Factorial de un numero
function Factorial(){
    let numero = parseInt(prompt("Ingrese un numero para calcular su factorial: "));
    let factorial = 1;
    for (let i=1; i<=numero; i++){
        factorial *= i;
    }
    console.log("El factorial de " + numero + " es: " + factorial);
}
Factorial();

//Ejercicio 9: Sumas sucesivas
function SumasSucesivas(){
    let numero = parseInt(prompt("Ingrese el numero que desea sumar sucesivamente: "));
    let veces =parseInt(prompt("Ingrese cuantas veces desea sumar: "));
    let suma = 0;
    for (let i=0; i<veces; i++){    
        suma += numero;
    }
    console.log("El resultado de sumar " + numero + " , " + veces + " veces es: " + suma);
}
SumasSucesivas();

//Ejercicio 10: Restas sucesivas
function RestasSucesivas(){
    let numero = parseInt(prompt("Ingrese el numero que desea restar sucesivamente: "));    
    let valorRestado = parseInt(prompt("Ingrese el valor a restar: "));
    let veces = parseInt(prompt("Ingrese cuantas veces desea restar: "));
    let resta = numero;
    for (let i=0; i<veces; i++){    
        resta -= valorRestado;
    }
    console.log("El resultado de restar " + valorRestado + " , " + veces + " veces al numero " + numero + " es: " + resta);
}
RestasSucesivas();
function RestaSucesiva() {
    let numero = parseInt(prompt("Ingrese el número inicial:"));
    let valor = parseInt(prompt("Ingrese el valor a restar en cada ciclo:"));
    let contador = 0;
    while (numero >= valor) {
        numero -= valor;
        contador++;
    }
    console.log("Resultado final: " + numero);
    console.log("Número de restas realizadas: " + contador);
}
RestaSucesiva();

//BLOQUE 2: VERSION CON ARREGLOS DE EL BLOQUE 1

//Ejercicio 1: Serie de Fibonacci con arreglos
function fibonacciArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de números que desea usar para generar series Fibonacci:"));
    let serie = [];
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
        serie.push(numero);
    }
    let resultados = [];
    for (let i = 0; i < serie.length; i++) {
        let a = 0, b = 1, siguiente;
        let resultado = [];
        for (let j = 0; j < serie[i]; j++) {
            resultado.push(a);
            siguiente = a + b;
            a = b;
            b = siguiente;
        }
        resultados.push(resultado);
    }
    console.log("Series de Fibonacci generadas:");
    console.log(resultados);
}
fibonacciArreglo();
//Ejercicio 2: Divisores de varios numeros con arreglos
function divisoresArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de números para encontrar sus divisores:"));
    let numeros = [];
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
        numeros.push(numero);
    }
    let resultados = [];
    for (let i = 0; i < numeros.length; i++) {
        let divisores = [];
        for (let j = 1; j <= numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                divisores.push(j);
            }
        }
        resultados.push(divisores);
    }
    console.log(`Numeros ingresados: ${numeros}`);
    console.log("Divisores de los números:");
    console.log(resultados);
}
divisoresArreglo();

//Ejercicio 3: Suma de divisores de varios numeros con arreglos
function sumaDivisoresArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de números para calcular la suma de sus divisores:"));
    let numeros = [];
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));
        numeros.push(numero);
    }
    let resultados = [];
    for (let i = 0; i < numeros.length; i++) {
        let suma = 0;
        for (let j = 1; j <= numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                suma += j;
            }
        }
        resultados.push(suma);
    }
    console.log(`Numeros ingresados: ${numeros}`);
    console.log("Suma de los divisores de los números:");
    console.log(resultados);
}
sumaDivisoresArreglo();

//Ejercicio 4: Numeros perfectos con arreglos
function numerosPerfectosArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de números que desea ingresar: "));    
    let numeros = [];
    let perfectos = [];
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
        numeros.push(numero);
    }
    for (let i = 0; i < numeros.length; i++) {
        let suma = 0;
        for (let j = 1; j < numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                suma += j;
            }
        }
        if (suma === numeros[i]) {
            perfectos.push(numeros[i]);
        }
    }
    console.log("Números perfectos encontrados:");
    console.log(perfectos);
}
numerosPerfectosArreglo();

//Ejercicio 5: Numeros primos con arreglos
function numerosPrimosArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar: "));
    let numeros = [];
    let primos = [];
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
        numeros.push(numero);
    }
    for (let i = 0; i < numeros.length; i++) {
        let contador = 0;
        for (let j = 1; j <= numeros[i]; j++) {
            if (numeros[i] % j === 0) {
                contador++;
            }
        }
        if (contador === 2) {
            primos.push(numeros[i]);
        }
    }
    console.log("Números primos encontrados:");
    console.log(primos);
}
numerosPrimosArreglo();

//Ejercicio 6: Invertir varios numeros con arreglos
function invertirNumero() {
  let n = parseInt(prompt("Ingrese la cantidad de números que desea invertir: "));  
    let numeros = [];   
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
        numeros.push(numero);
    }   
    let invertidos = [];
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let invertido = 0;
        while (numero > 0) {
            let digito = numero % 10;
            invertido = invertido * 10 + digito;
            numero = Math.floor(numero / 10);
        }
        invertidos.push(invertido);
    }
    console.log("Números ingresados:", numeros);
    console.log("Números invertidos:", invertidos); 
}
invertirNumero();

//Ejercicio 7: Contar digitos de varios numeros con arreglos
function contarDigitosArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de números para contar sus dígitos: "));    
    let numeros = [];
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
        numeros.push(numero);
    }
    let conteos = [];
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let contador = 0;
        while (numero > 0) {
            numero = Math.floor(numero / 10);
            contador++;
        }
        conteos.push(contador);
    }
    console.log("Números ingresados:", numeros);
    console.log("Cantidad de dígitos en cada número:", conteos);
}
contarDigitosArreglo();

//Ejercicio 8: Factorial de varios numeros con arreglos
function factorialArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de números para calcular su factorial: "));  
    let numeros = [];   
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
        numeros.push(numero);
    }  
    let factoriales = [];
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let factorial = 1;
        for (let j = 1 ;j <= numero; j++) {
            factorial *= j;
        }
        factoriales.push(factorial);
    }
    console.log("Números ingresados:", numeros);
    console.log("Factoriales de los números:", factoriales);
}
factorialArreglo();

//Ejercicio 9: Sumas sucesivas con arreglos
function sumasSucesivasArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de números para realizar sumas sucesivas: "));    
    let numeros = [];
    let veces=parseInt(prompt("Ingrese cuantas veces desea sumar cada numero: "));
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
        numeros.push(numero);
    }
    let resultados = [];
    for (let i = 0; i < numeros.length; i++) {
        let suma = 0;
        for (let j = 0; j < veces; j++) {
            suma += numeros[i];
        }
        resultados.push(suma);
    }
    console.log("Números ingresados:", numeros);
    console.log("Resultados de las sumas sucesivas:", resultados);
}
sumasSucesivasArreglo();

//Ejercicio 10: Restas sucesivas con arreglos
function restaSucesivaArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de números para realizar restas sucesivas: "));
    let numeros = [];
    let valorRestado = parseInt(prompt("Ingrese el valor a restar en cada ciclo: "));

    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
        numeros.push(numero);
    }
    let resultados = [];
    let contadores =[];
    let contador=0;
    for (let i = 0; i < numeros.length; i++) {
        let resta = numeros[i];
        while (resta >= valorRestado) {
            resta -= valorRestado;
            contador++;
        }
        contadores.push(contador);
        resultados.push(resta);
    }
    console.log("Números ingresados:", numeros);
    console.log("Resultados de las restas sucesivas:");
    console.log(resultados);
    console.log("Cantidad de restas realizadas para cada número:");
    console.log(contadores);
}
restaSucesivaArreglo();
function restasSucesivasArreglo() {
    let n = parseInt(prompt("Ingrese la cantidad de números para realizar restas sucesivas: "));
    let numeros = [];
    let valorRestado = parseInt(prompt("Ingrese el valor a restar en cada ciclo: "));
    let veces = parseInt(prompt("Ingrese cuantas veces desea restar cada numero: "));
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número " + (i + 1) + ": "));
        numeros.push(numero);
    }
    let resultados = [];
    for (let i = 0; i < numeros.length; i++) {
        let resta = numeros[i];
        for (let j = 0; j < veces; j++) {
            resta -= valorRestado;
        }   
        resultados.push(resta);
    }
    console.log("Números ingresados:", numeros);
    console.log("Resultados de las restas sucesivas:", resultados);
}
restasSucesivasArreglo();

//FIN ALGORITMO
function contarSignosPuntuacion() {
    let frase = prompt("Ingrese una frase: ");
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (
            frase[i] === "." || 
            frase[i] === "," || 
            frase[i] === ";" || 
            frase[i] === ":" || 
            frase[i] === "!" || 
            frase[i] === "?" || 
            frase[i] === "¡" || 
            frase[i] === "¿" || 
            frase[i] === "\"" || 
            frase[i] === "'" || 
            frase[i] === "(" || 
            frase[i] === ")" || 
            frase[i] === "-"
        ) {
            contador++;
        }
    }
    alert("La frase tiene " + contador + " signos de puntuación.");
}
contarSignosPuntuacion();
function contarVocales() {
    let frase = prompt("Ingrese una frase: ");
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (
            frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || 
            frase[i] === "o" || frase[i] === "u" ||
            frase[i] === "A" || frase[i] === "E" || frase[i] === "I" || 
            frase[i] === "O" || frase[i] === "U"
        ) {
            contador++;
        }
    }

    alert("La frase tiene " + contador + " vocales.");
}

contarVocales();
function contarConsonantes() {
    let frase = prompt("Ingrese una frase: ");
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (
            frase[i] === "b" || frase[i] === "c" || frase[i] === "d" || frase[i] === "f" ||
            frase[i] === "g" || frase[i] === "h" || frase[i] === "j" || frase[i] === "k" ||
            frase[i] === "l" || frase[i] === "m" || frase[i] === "n" || frase[i] === "p" ||
            frase[i] === "q" || frase[i] === "r" || frase[i] === "s" || frase[i] === "t" ||
            frase[i] === "v" || frase[i] === "w" || frase[i] === "x" || frase[i] === "y" ||
            frase[i] === "z" ||
            frase[i] === "B" || frase[i] === "C" || frase[i] === "D" || frase[i] === "F" ||
            frase[i] === "G" || frase[i] === "H" || frase[i] === "J" || frase[i] === "K" ||
            frase[i] === "L" || frase[i] === "M" || frase[i] === "N" || frase[i] === "P" ||
            frase[i] === "Q" || frase[i] === "R" || frase[i] === "S" || frase[i] === "T" ||
            frase[i] === "V" || frase[i] === "W" || frase[i] === "X" || frase[i] === "Y" ||
            frase[i] === "Z"
        ) {
            contador++;
        }
    }
    alert("La frase tiene " + contador + " consonantes.");
}
contarConsonantes();
function contarDigitos() {
    let frase = prompt("Ingrese una frase: ");
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        if (
            frase[i] === "0" || frase[i] === "1" || frase[i] === "2" || 
            frase[i] === "3" || frase[i] === "4" || frase[i] === "5" || 
            frase[i] === "6" || frase[i] === "7" || frase[i] === "8" || 
            frase[i] === "9"
        ) {
            contador++;
        }
    }
    alert("Cantidad de dígitos: " + contador);
}
contarDigitos();
function buscarPalabra() {
    // Pedir el texto completo
    let texto = prompt("Ingrese el texto:");
    // Pedir la palabra a buscar
    let palabra = prompt("Ingrese la palabra a buscar:");
    let contador = 0;
    // Recorremos el texto
    for (let i = 0; i <= texto.length - palabra.length; i++) {
        let subcadena = "";
        // Construimos una subcadena del mismo tamaño que la palabra
        for (let j = 0; j < palabra.length; j++) {
            subcadena += texto[i + j];
        }
        // Comparamos la subcadena con la palabra
        if (subcadena === palabra) {
            contador++;
        }
    }
    if (contador > 0) {
        alert("La palabra '" + palabra + "' sí se encuentra en el texto.");
    } else {
        alert("La palabra '" + palabra + "' NO se encuentra en el texto.");
    }
}
buscarPalabra();
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
//12. Contar caractere en el texto.
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
//1. Contar palabras
function contarPalabras(texto) {
    let contador = 0;
    let i = 0;
    if (texto.length > 0) {
        contador = 1;
    }
    while (i < texto.length) {
        if (texto[i] === " ") {
            contador++;
        }
        i++;
    }
    return contador;
}

//2. Contar signos de puntuación
function contarSignosPuntuacion(texto) {
    let signosPuntuacion = ".,;:!?¡¿\"'()-";
    let contador = 0;
    let i = 0;
    while (i < texto.length) {
        if (signosPuntuacion.includes(texto[i])) {
            contador++;
        }
        i++;
    }
    return contador;
}

//3. Contar vocales
function contarVocales(texto) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    let i = 0;
    while (i < texto.length) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
        i++;
    }
    return contador;
}

//4. Contar consonantes
function contarConsonantes(texto) {
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let contador = 0;
    let i = 0;
    while (i < texto.length) {
        if (consonantes.includes(texto[i])) {
            contador++;
        }
        i++;
    }
    return contador;
}

//5. Contar dígitos
function contarDigitos(texto) {
    let digitos = "0123456789";
    let contador = 0;
    let i = 0;
    while (i < texto.length) {
        if (digitos.includes(texto[i])) {
            contador++;
        }
        i++;
    }
    return contador;
}

//6. Contar palabras que empiezan con mayúscula
function contarMayusculasIniciales(texto) {
    let contador = 0;
    let i = 0;
    if (texto[0] >= "A" && texto[0] <= "Z") {
        contador++;
    }
    while (i < texto.length) {
        if (texto[i] === " " && i + 1 < texto.length) {
            let siguiente = texto[i + 1];
            if (siguiente >= "A" && siguiente <= "Z") {
                contador++;
            }
        }
        i++;
    }
    return contador;
}

//7. Contar palabras que empiezan con minúscula
function contarMinusculasIniciales(texto) {
    let contador = 0;
    let i = 0;
    if (texto[0] >= "a" && texto[0] <= "z") {
        contador++;
    }
    while (i < texto.length) {
        if (texto[i] === " " && i + 1 < texto.length) {
            let siguiente = texto[i + 1];
            if (siguiente >= "a" && siguiente <= "z") {
                contador++;
            }
        }
        i++;
    }
    return contador;
}

//8. Contar párrafos
function contarParrafos(texto) {
    let contador = 0;
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === "\n") {
            contador++;
        }
        i++;
    }
    return contador;
}

//9. Invertir texto completo
function invertirTexto(texto) {
    let invertido = "";
    let i = texto.length - 1;
    while (i >= 0) {
        invertido += texto[i];
        i--;
    }
    return invertido;
}

//10. Contar todos los caracteres
function contarCaracteres(texto) {
    return texto.length;
}

//11. Buscar una palabra en el texto
function buscarPalabra(texto, palabra) {
    return texto.includes(palabra);
}

//12. Contar un carácter en el texto
function contarCaracter(texto, caracter) {
    let contador = 0;
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === caracter) {
            contador++;
        }
        i++;
    }
    return contador;
}

//13. Contar caracteres en posiciones pares
function contarPares(texto) {
    let contador = 0;
    let i = 0;
    while (i < texto.length) {
        if (i % 2 === 0) {
            contador++;
        }
        i++;
    }
    return contador;
}

//14. Contar caracteres en posiciones impares
function contarImpares(texto) {
    let contador = 0;
    let i = 0;
    while (i < texto.length) {
        if (i % 2 !== 0) {
            contador++;
        }
        i++;
    }
    return contador;
}

//15. Añadir un texto al inicio o al final
function añadirTexto(texto, fragmento) {
    let alInicio = fragmento + " " + texto;
    let alFinal = texto + " " + fragmento;
    return { inicio: alInicio, final: alFinal };
}
// Fin del código con bucles while
//1. Contar palabras con bandera
function contarPalabras(texto) {
    let contador = 0;
    let i = 0;
    let bandera = true; // mientras haya caracteres por recorrer
    if (texto.length > 0) contador = 1;

    while (bandera) {
        if (texto[i] === " ") {
            contador++;
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//2. Contar signos de puntuación
function contarSignosPuntuacion(texto) {
    let signosPuntuacion = ".,;:!?¡¿\"'()-";
    let contador = 0;
    let i = 0;
    let bandera = true;

    while (bandera) {
        if (signosPuntuacion.includes(texto[i])) {
            contador++;
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//3. Contar vocales
function contarVocales(texto) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    let i = 0;
    let bandera = true;

    while (bandera) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//4. Contar consonantes
function contarConsonantes(texto) {
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let contador = 0;
    let i = 0;
    let bandera = true;

    while (bandera) {
        if (consonantes.includes(texto[i])) {
            contador++;
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//5. Contar dígitos
function contarDigitos(texto) {
    let digitos = "0123456789";
    let contador = 0;
    let i = 0;
    let bandera = true;

    while (bandera) {
        if (digitos.includes(texto[i])) {
            contador++;
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//6. Contar palabras que empiezan con mayúscula
function contarMayusculasIniciales(texto) {
    let contador = 0;
    let i = 0;
    let bandera = true;

    if (texto[0] >= "A" && texto[0] <= "Z") contador++;

    while (bandera) {
        if (texto[i] === " " && i + 1 < texto.length) {
            let siguiente = texto[i + 1];
            if (siguiente >= "A" && siguiente <= "Z") {
                contador++;
            }
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//7. Contar palabras que empiezan con minúscula
function contarMinusculasIniciales(texto) {
    let contador = 0;
    let i = 0;
    let bandera = true;

    if (texto[0] >= "a" && texto[0] <= "z") contador++;

    while (bandera) {
        if (texto[i] === " " && i + 1 < texto.length) {
            let siguiente = texto[i + 1];
            if (siguiente >= "a" && siguiente <= "z") {
                contador++;
            }
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//8. Contar párrafos
function contarParrafos(texto) {
    let contador = 0;
    let i = 0;
    let bandera = true;

    while (bandera) {
        if (texto[i] === "\n") {
            contador++;
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//9. Invertir texto completo
function invertirTexto(texto) {
    let invertido = "";
    let i = texto.length - 1;
    let bandera = true;

    while (bandera) {
        invertido += texto[i];
        i--;
        if (i < 0) bandera = false;
    }
    return invertido;
}

//10. Contar todos los caracteres
function contarCaracteres(texto) {
    return texto.length;
}

//11. Buscar una palabra en el texto
function buscarPalabra(texto, palabra) {
    return texto.includes(palabra);
}

//12. Contar un carácter en el texto
function contarCaracter(texto, caracter) {
    let contador = 0;
    let i = 0;
    let bandera = true;

    while (bandera) {
        if (texto[i] === caracter) {
            contador++;
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//13. Contar caracteres en posiciones pares
function contarPares(texto) {
    let contador = 0;
    let i = 0;
    let bandera = true;

    while (bandera) {
        if (i % 2 === 0) {
            contador++;
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//14. Contar caracteres en posiciones impares
function contarImpares(texto) {
    let contador = 0;
    let i = 0;
    let bandera = true;

    while (bandera) {
        if (i % 2 !== 0) {
            contador++;
        }
        i++;
        if (i >= texto.length) bandera = false;
    }
    return contador;
}

//15. Añadir un texto al inicio o al final
function añadirTexto(texto, fragmento) {
    let alInicio = fragmento + " " + texto;
    let alFinal = texto + " " + fragmento;
    return { inicio: alInicio, final: alFinal };
}
//1. Contar palabras
function contarPalabras(texto) {
    let palabras = [];
    let palabra = "";
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === " ") {
            if (palabra !== "") {
                palabras.push(palabra);
                palabra = "";
            }
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra !== "") {
        palabras.push(palabra);
    }
    return palabras.length;
}

//2. Contar signos de puntuación
function contarSignosPuntuacion(texto) {
    let signosPuntuacion = [];
    let s = ".,;:!?¡¿\"'()-";
    let j = 0;
    while (j < s.length) {
        signosPuntuacion.push(s[j]);
        j++;
    }

    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }

    let contador = 0;
    i = 0;
    while (i < caracteres.length) {
        if (signosPuntuacion.includes(caracteres[i])) {
            contador++;
        }
        i++;
    }
    return contador;
}

//3. Contar vocales
function contarVocales(texto) {
    let vocales = [];
    let v = "aeiouAEIOU";
    let j = 0;
    while (j < v.length) {
        vocales.push(v[j]);
        j++;
    }

    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }

    let contador = 0;
    i = 0;
    while (i < caracteres.length) {
        if (vocales.includes(caracteres[i])) {
            contador++;
        }
        i++;
    }
    return contador;
}

//4. Contar consonantes
function contarConsonantes(texto) {
    let consonantes = [];
    let c = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let j = 0;
    while (j < c.length) {
        consonantes.push(c[j]);
        j++;
    }

    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }

    let contador = 0;
    i = 0;
    while (i < caracteres.length) {
        if (consonantes.includes(caracteres[i])) {
            contador++;
        }
        i++;
    }
    return contador;
}

//5. Contar dígitos
function contarDigitos(texto) {
    let digitos = [];
    let d = "0123456789";
    let j = 0;
    while (j < d.length) {
        digitos.push(d[j]);
        j++;
    }

    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }

    let contador = 0;
    i = 0;
    while (i < caracteres.length) {
        if (digitos.includes(caracteres[i])) {
            contador++;
        }
        i++;
    }
    return contador;
}

//6. Contar palabras que empiezan con mayúscula
function contarMayusculasIniciales(texto) {
    let palabras = [];
    let palabra = "";
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === " ") {
            if (palabra !== "") {
                palabras.push(palabra);
                palabra = "";
            }
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra !== "") {
        palabras.push(palabra);
    }

    let contador = 0;
    i = 0;
    while (i < palabras.length) {
        let primera = palabras[i][0];
        if (primera >= "A" && primera <= "Z") {
            contador++;
        }
        i++;
    }
    return contador;
}

//7. Contar palabras que empiezan con minúscula
function contarMinusculasIniciales(texto) {
    let palabras = [];
    let palabra = "";
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === " ") {
            if (palabra !== "") {
                palabras.push(palabra);
                palabra = "";
            }
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra !== "") {
        palabras.push(palabra);
    }

    let contador = 0;
    i = 0;
    while (i < palabras.length) {
        let primera = palabras[i][0];
        if (primera >= "a" && primera <= "z") {
            contador++;
        }
        i++;
    }
    return contador;
}

//8. Contar párrafos
function contarParrafos(texto) {
    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }

    let contador = 1;
    i = 0;
    while (i < caracteres.length) {
        if (caracteres[i] === "\n") {
            contador++;
        }
        i++;
    }
    return contador;
}

//9. Invertir texto completo
function invertirTexto(texto) {
    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }

    let invertido = "";
    i = caracteres.length - 1;
    while (i >= 0) {
        invertido += caracteres[i];
        i--;
    }
    return invertido;
}

//10. Contar todos los caracteres
function contarCaracteres(texto) {
    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }
    return caracteres.length;
}

//11. Buscar una palabra en el texto
function buscarPalabra(texto, palabra) {
    let palabras = [];
    let temp = "";
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === " ") {
            if (temp !== "") {
                palabras.push(temp);
                temp = "";
            }
        } else {
            temp += texto[i];
        }
        i++;
    }
    if (temp !== "") {
        palabras.push(temp);
    }

    i = 0;
    while (i < palabras.length) {
        if (palabras[i] === palabra) {
            return true;
        }
        i++;
    }
    return false;
}

//12. Contar un carácter en el texto
function contarCaracter(texto, caracter) {
    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }

    let contador = 0;
    i = 0;
    while (i < caracteres.length) {
        if (caracteres[i] === caracter) {
            contador++;
        }
        i++;
    }
    return contador;
}

//13. Contar caracteres en posiciones pares
function contarPares(texto) {
    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }

    let contador = 0;
    i = 0;
    while (i < caracteres.length) {
        if (i % 2 === 0) {
            contador++;
        }
        i++;
    }
    return contador;
}

//14. Contar caracteres en posiciones impares
function contarImpares(texto) {
    let caracteres = [];
    let i = 0;
    while (i < texto.length) {
        caracteres.push(texto[i]);
        i++;
    }

    let contador = 0;
    i = 0;
    while (i < caracteres.length) {
        if (i % 2 !== 0) {
            contador++;
        }
        i++;
    }
    return contador;
}

//15. Añadir un texto al inicio o al final
function añadirTexto(texto, fragmento) {
    let alInicio = fragmento + " " + texto;
    let alFinal = texto + " " + fragmento;
    return { inicio: alInicio, final: alFinal };
}
// 1. Contar palabras que empiezan con mayúscula y con minúscula
function contarMayusMinus(texto) {
    let palabras = [];
    let palabra = "";
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === " ") {
            if (palabra !== "") {
                palabras.push(palabra);
                palabra = "";
            }
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra !== "") palabras.push(palabra);

    let mayus = 0, minus = 0;
    i = 0;
    while (i < palabras.length) {
        let primera = palabras[i][0];
        if (primera >= "A" && primera <= "Z") mayus++;
        if (primera >= "a" && primera <= "z") minus++;
        i++;
    }
    return { mayusculas: mayus, minusculas: minus };
}

// 2. Contar caracteres pares que son vocales e impares que son consonantes
function contarParesVocalesImparesConsonantes(texto) {
    let vocales = [];
    let v = "aeiouAEIOU";
    let j = 0; while (j < v.length) { vocales.push(v[j]); j++; }

    let consonantes = [];
    let c = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    j = 0; while (j < c.length) { consonantes.push(c[j]); j++; }

    let arr = [];
    let i = 0; while (i < texto.length) { arr.push(texto[i]); i++; }

    let paresVocales = 0, imparesConsonantes = 0;
    i = 0;
    while (i < arr.length) {
        if (i % 2 === 0 && vocales.includes(arr[i])) paresVocales++;
        if (i % 2 !== 0 && consonantes.includes(arr[i])) imparesConsonantes++;
        i++;
    }
    return { paresVocales, imparesConsonantes };
}

// 3. Contar párrafos y palabras en cada párrafo
function contarParrafosYPalabras(texto) {
    let parrafos = [];
    let parrafo = "";
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === "\n") {
            parrafos.push(parrafo);
            parrafo = "";
        } else {
            parrafo += texto[i];
        }
        i++;
    }
    if (parrafo !== "") parrafos.push(parrafo);

    let resultado = [];
    i = 0;
    while (i < parrafos.length) {
        let palabras = [];
        let palabra = "";
        let j = 0;
        while (j < parrafos[i].length) {
            if (parrafos[i][j] === " ") {
                if (palabra !== "") {
                    palabras.push(palabra);
                    palabra = "";
                }
            } else {
                palabra += parrafos[i][j];
            }
            j++;
        }
        if (palabra !== "") palabras.push(palabra);
        resultado.push({ parrafo: i + 1, palabras: palabras.length });
        i++;
    }
    return resultado;
}

// 4. Buscar una palabra y contar cuántas veces aparece
function contarOcurrencias(texto, palabraBuscada) {
    let palabras = [];
    let palabra = "";
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === " ") {
            if (palabra !== "") {
                palabras.push(palabra);
                palabra = "";
            }
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra !== "") palabras.push(palabra);

    let contador = 0;
    i = 0;
    while (i < palabras.length) {
        if (palabras[i] === palabraBuscada) contador++;
        i++;
    }
    return contador;
}

// 5. Invertir texto y contar signos de puntuación
function invertirYContarSignos(texto) {
    let arr = [];
    let i = 0; while (i < texto.length) { arr.push(texto[i]); i++; }

    let invertido = "";
    i = arr.length - 1;
    while (i >= 0) {
        invertido += arr[i];
        i--;
    }

    let signos = [];
    let s = ".,;:!?¡¿\"'()-";
    let j = 0; while (j < s.length) { signos.push(s[j]); j++; }

    let contador = 0;
    i = 0;
    while (i < invertido.length) {
        if (signos.includes(invertido[i])) contador++;
        i++;
    }
    return { invertido, signos: contador };
}

// 6. Contar palabras que terminan en vocal y en consonante
function contarFinalVocalConsonante(texto) {
    let palabras = [];
    let palabra = "";
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === " ") {
            if (palabra !== "") {
                palabras.push(palabra);
                palabra = "";
            }
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra !== "") palabras.push(palabra);

    let vocales = [];
    let v = "aeiouAEIOU";
    let j = 0; while (j < v.length) { vocales.push(v[j]); j++; }

    let consonantes = [];
    let c = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    j = 0; while (j < c.length) { consonantes.push(c[j]); j++; }

    let finVocal = 0, finConsonante = 0;
    i = 0;
    while (i < palabras.length) {
        let ultima = palabras[i][palabras[i].length - 1];
        if (vocales.includes(ultima)) finVocal++;
        if (consonantes.includes(ultima)) finConsonante++;
        i++;
    }
    return { finVocal, finConsonante };
}

// 7. Contar dígitos y palabras con dígitos
function contarDigitosYPalabrasConDigitos(texto) {
    let digitos = [];
    let d = "0123456789";
    let j = 0; while (j < d.length) { digitos.push(d[j]); j++; }

    let arr = [];
    let i = 0; while (i < texto.length) { arr.push(texto[i]); i++; }

    let totalDigitos = 0;
    i = 0;
    while (i < arr.length) {
        if (digitos.includes(arr[i])) totalDigitos++;
        i++;
    }

    let palabras = [];
    let palabra = "";
    i = 0;
    while (i < texto.length) {
        if (texto[i] === " ") {
            if (palabra !== "") {
                palabras.push(palabra);
                palabra = "";
            }
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra !== "") palabras.push(palabra);

    let palabrasConDigitos = 0;
    i = 0;
    while (i < palabras.length) {
        let tieneDigito = false;
        j = 0;
        while (j < palabras[i].length) {
            if (digitos.includes(palabras[i][j])) tieneDigito = true;
            j++;
        }
        if (tieneDigito) palabrasConDigitos++;
        i++;
    }
    return { totalDigitos, palabrasConDigitos };
}

// 8. Contar espacios y saltos de línea
function contarEspaciosSaltos(texto) {
    let arr = [];
    let i = 0; while (i < texto.length) { arr.push(texto[i]); i++; }

    let espacios = 0, saltos = 0;
    i = 0;
    while (i < arr.length) {
        if (arr[i] === " ") espacios++;
        if (arr[i] === "\n") saltos++;
        i++;
    }
    return { espacios, saltos };
}
// 9. Añadir fragmento al inicio y contar palabras con mayúscula
function añadirYContarMayus(texto, fragmento) {
    let nuevoTexto = fragmento + " " + texto;

    let palabras = [];
    let palabra = "";
    let i = 0;
    while (i < nuevoTexto.length) {
        if (nuevoTexto[i] === " ") {
            if (palabra !== "") {
                palabras.push(palabra);
                palabra = "";
            }
        } else {
            palabra += nuevoTexto[i];
        }
        i++;
    }
    if (palabra !== "") palabras.push(palabra);

    let contador = 0;
    i = 0;
    while (i < palabras.length) {
        let primera = palabras[i][0];
        if (primera >= "A" && primera <= "Z") contador++;
        i++;
    }
    return { nuevoTexto, mayusculasIniciales: contador };
}

// 10. Contar simultáneamente vocales, consonantes, dígitos y signos de puntuación
function contarTodo(texto) {
    let vocales = [];
    let v = "aeiouAEIOU";
    let j = 0; while (j < v.length) { vocales.push(v[j]); j++; }

    let consonantes = [];
    let c = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    j = 0; while (j < c.length) { consonantes.push(c[j]); j++; }

    let digitos = [];
    let d = "0123456789";
    j = 0; while (j < d.length) { digitos.push(d[j]); j++; }

    let signos = [];
    let s = ".,;:!?¡¿\"'()-";
    j = 0; while (j < s.length) { signos.push(s[j]); j++; }

    let arr = [];
    let i = 0; while (i < texto.length) { arr.push(texto[i]); i++; }

    let totalVocales = 0, totalConsonantes = 0, totalDigitos = 0, totalSignos = 0;
    i = 0;
    while (i < arr.length) {
        if (vocales.includes(arr[i])) totalVocales++;
        else if (consonantes.includes(arr[i])) totalConsonantes++;
        else if (digitos.includes(arr[i])) totalDigitos++;
        else if (signos.includes(arr[i])) totalSignos++;
        i++;
    }
    return { vocales: totalVocales, consonantes: totalConsonantes, digitos: totalDigitos, signos: totalSignos };
}
// 1. Contar palabras que empiezan con mayúscula y con minúscula
function contarMayusMinus(texto) {
    let mayus = 0, minus = 0;
    let i = 0;
    let inicioPalabra = true;

    while (i < texto.length) {
        if (texto[i] === " ") {
            inicioPalabra = true;
        } else {
            if (inicioPalabra) {
                if (texto[i] >= "A" && texto[i] <= "Z") mayus++;
                if (texto[i] >= "a" && texto[i] <= "z") minus++;
                inicioPalabra = false;
            }
        }
        i++;
    }
    return { mayusculas: mayus, minusculas: minus };
}

// 2. Contar caracteres pares que son vocales e impares que son consonantes
function contarParesVocalesImparesConsonantes(texto) {
    let paresVocales = 0, imparesConsonantes = 0;
    let vocales = "aeiouAEIOU";
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let i = 0;

    while (i < texto.length) {
        if (i % 2 === 0 && vocales.includes(texto[i])) paresVocales++;
        if (i % 2 !== 0 && consonantes.includes(texto[i])) imparesConsonantes++;
        i++;
    }
    return { paresVocales, imparesConsonantes };
}

// 3. Contar párrafos y palabras en cada párrafo
function contarParrafosYPalabras(texto) {
    let i = 0;
    let parrafo = 1;
    let palabras = 0;
    let inicioPalabra = false;
    let resultado = [];

    while (i < texto.length) {
        if (texto[i] === "\n") {
            resultado.push({ parrafo, palabras });
            parrafo++;
            palabras = 0;
            inicioPalabra = false;
        } else if (texto[i] === " ") {
            inicioPalabra = false;
        } else {
            if (!inicioPalabra) {
                palabras++;
                inicioPalabra = true;
            }
        }
        i++;
    }
    resultado.push({ parrafo, palabras });
    return resultado;
}

// 4. Buscar una palabra y contar cuántas veces aparece
function contarOcurrencias(texto, palabraBuscada) {
    let i = 0;
    let palabra = "";
    let contador = 0;

    while (i < texto.length) {
        if (texto[i] === " ") {
            if (palabra === palabraBuscada) contador++;
            palabra = "";
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra === palabraBuscada) contador++;
    return contador;
}

// 5. Invertir texto y contar signos de puntuación
function invertirYContarSignos(texto) {
    let invertido = "";
    let i = texto.length - 1;
    while (i >= 0) {
        invertido += texto[i];
        i--;
    }

    let signos = ".,;:!?¡¿\"'()-";
    let contador = 0;
    i = 0;
    while (i < invertido.length) {
        if (signos.includes(invertido[i])) contador++;
        i++;
    }
    return { invertido, signos: contador };
}

// 6. Contar palabras que terminan en vocal y en consonante
function contarFinalVocalConsonante(texto) {
    let vocales = "aeiouAEIOU";
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let i = 0;
    let palabra = "";
    let finVocal = 0, finConsonante = 0;

    while (i < texto.length) {
        if (texto[i] === " ") {
            if (palabra !== "") {
                let ultima = palabra[palabra.length - 1];
                if (vocales.includes(ultima)) finVocal++;
                if (consonantes.includes(ultima)) finConsonante++;
                palabra = "";
            }
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra !== "") {
        let ultima = palabra[palabra.length - 1];
        if (vocales.includes(ultima)) finVocal++;
        if (consonantes.includes(ultima)) finConsonante++;
    }
    return { finVocal, finConsonante };
}

// 7. Contar dígitos y palabras con dígitos
function contarDigitosYPalabrasConDigitos(texto) {
    let digitos = "0123456789";
    let totalDigitos = 0;
    let palabrasConDigitos = 0;
    let palabra = "";
    let tieneDigito = false;
    let i = 0;

    while (i < texto.length) {
        if (digitos.includes(texto[i])) {
            totalDigitos++;
            tieneDigito = true;
        }
        if (texto[i] === " ") {
            if (palabra !== "") {
                if (tieneDigito) palabrasConDigitos++;
                palabra = "";
                tieneDigito = false;
            }
        } else {
            palabra += texto[i];
        }
        i++;
    }
    if (palabra !== "" && tieneDigito) palabrasConDigitos++;
    return { totalDigitos, palabrasConDigitos };
}

// 8. Contar espacios y saltos de línea
function contarEspaciosSaltos(texto) {
    let espacios = 0, saltos = 0;
    let i = 0;
    while (i < texto.length) {
        if (texto[i] === " ") espacios++;
        if (texto[i] === "\n") saltos++;
        i++;
    }
    return { espacios, saltos };
}

// 9. Añadir fragmento al inicio y contar palabras con mayúscula
function añadirYContarMayus(texto, fragmento) {
    let nuevoTexto = fragmento + " " + texto;
    let mayus = 0;
    let i = 0;
    let inicioPalabra = true;

    while (i < nuevoTexto.length) {
        if (nuevoTexto[i] === " ") {
            inicioPalabra = true;
        } else {
            if (inicioPalabra) {
                if (nuevoTexto[i] >= "A" && nuevoTexto[i] <= "Z") mayus++;
                inicioPalabra = false;
            }
        }
        i++;
    }
    return { nuevoTexto, mayusculasIniciales: mayus };
}

// 10. Contar simultáneamente vocales, consonantes, dígitos y signos de puntuación
function contarTodo(texto) {
    let vocales = "aeiouAEIOU";
    let consonantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let digitos = "0123456789";
    let signos = ".,;:!?¡¿\"'()-";

    let totalVocales = 0, totalConsonantes = 0, totalDigitos = 0, totalSignos = 0;
    let i = 0;

    while (i < texto.length) {
        if (vocales.includes(texto[i])) totalVocales++;
        else if (consonantes.includes(texto[i])) totalConsonantes++;
        else if (digitos.includes(texto[i])) totalDigitos++;
        else if (signos.includes(texto[i])) totalSignos++;
        i++;
    }
    return { vocales: totalVocales, consonantes: totalConsonantes, digitos: totalDigitos, signos: totalSignos };
}
function contarCuentaspalabrastienenmasdetresvocales(texto) {
    let i = 0;
    let palabra = "";
    let contadorPalabras = 0;   
    let vocales = "aeiouAEIOU";

    while (i < texto.length) {
        if (texto[i] === " ") {
            // Procesar la palabra acumulada
            let contadorVocales = 0;
            for (let j = 0; j < palabra.length; j++) {
                if (vocales.includes(palabra[j])) {
                    contadorVocales++;
                }
            }
            if (contadorVocales > 3) {
                contadorPalabras++;
            }
            palabra = ""; // reiniciar
        } else {
            palabra += texto[i];
        }
        i++;
    }

    // Procesar la última palabra (si no termina en espacio)
    if (palabra.length > 0) {
        let contadorVocales = 0;
        for (let j = 0; j < palabra.length; j++) {
            if (vocales.includes(palabra[j])) {
                contadorVocales++;
            }
        }
        if (contadorVocales > 3) {
            contadorPalabras++;
        }
    }

    return contadorPalabras;
}
function contarCuentaspalabrastienenmasdetresvocales(texto) {
    let palabras = [];          
    let palabraActual = [];     
    let vocales = "aeiouAEIOU"; 
    let contadorPalabras = 0;
    // recorrer el texto carácter por carácter
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter === " ") {
            if (palabraActual.length > 0) {
                palabras.push(palabraActual); // guardar la palabra formada
                palabraActual = [];           // reiniciar
            }
        } else {
            palabraActual.push(caracter);     // agregar letra a la palabra
        }
    }
    // procesar la última palabra si existe
    if (palabraActual.length > 0) {
        palabras.push(palabraActual);
    }
    // recorrer cada palabra y contar vocales
    for (let i = 0; i < palabras.length; i++) {
        let contadorVocales = 0;
        for (let j = 0; j < palabras[i].length; j++) {
            if (vocales.includes(palabras[i][j])) {
                contadorVocales++;
            }
        }
        if (contadorVocales > 3) {
            contadorPalabras++;
        }
    }
    return contadorPalabras;
}
