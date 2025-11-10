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
    for (let i=numero.length - 1; i>=0; i--){
        numeroInvertido += numero[i];
    }
    numeroInvertido = parseInt(numeroInvertido);
    console.log("Numero ingresado: " + numero);
    console.log("Numero invertido: " + numeroInvertido);
}
InvertirNumero();
function invertirNumeros() {
  let numero = parseInt(prompt("Ingrese un número para invertir:"));
  let invertido = 0;

  for (; numero > 0; numero = Math.floor(numero / 10)) {
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
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
    for (; numero> 0; numero= Math.floor(numero /10)){
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

    for (; numero >= valor; numero -= valor) {
        contador++;
    }

    console.log("Resultado final: " + numero);
    console.log("Número de restas realizadas: " + contador);
}
RestaSucesiva();

//BLOQUE 2: VERSION CON ARREGLOS DE EL BLOQUE 1

    


