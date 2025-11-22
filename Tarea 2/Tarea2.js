//Este archivo a sido realizado por: Derick Lizandro Vinces Ronquillo.
//Carrera: Ingnieria de software.
//Universidad: Universidad Estatal de Milagro (UNEMI).
//Asignatura: Algoritmo y logica de programacion.
//Paralelo: B1
//Docente: MSc. Daniel Vera.
//Tarea #2 Semana #9.
//Fecha de creacion: 24/10/2025
//Fecha entrega: 28/10/2025

//BLOQUE 1: EJERCICIOS DE CADENAS DE TEXTO.

//1. Contar caracteres de una frase publicitaria.
function contarCaracteres(){
    let frase = prompt("Ingrese una frase publicitaria:");
    let cantidadCaracteres = frase.length;
    console.log("La frase ingresa es: " + frase);
    alert("La cantidad de caracteres en la frase es: " + cantidadCaracteres);
}
contarCaracteres();

//2. Contar apariciones de una vocal en un titulo.
function contarVocalEnTitulo(){
    let titulo = prompt("Ingrese el título de una película:");
    let vocal = prompt("Ingrese una vocal para contar sus apariciones en el título:");
    let contador = 0;
    for(let i=0; i<titulo.length; i++){
        if(titulo[i]===vocal){
            contador++;
        }
    }
    console.log("La frase ingresa es: " + titulo);
    alert("La vocal "+vocal+" aparece "+contador+" veces en el titulo");
}
contarVocalEnTitulo();

//3. Invertir el nombre de un producto.
function invertirNombreProducto(){
    let producto = prompt("Ingrese el nombre de un producto:");
    let nombreInvertido = "";
    for (let i=producto.length-1; i>=0; i--){
        nombreInvertido += producto[i];
    }
    console.log("El nombre del producto ingresado es: " + producto);
    alert("El nombre del producto invertido es: " + nombreInvertido);
}
invertirNombreProducto();

//4. Comparar longitudes de nombres de varias ciudades.
function compararLongitudesCaracteres(){
    let cantidadCiudades = parseInt(prompt("¿Cuántas ciudades desea ingresar?"));
    let ciudades = [];
    for (let i=0; i<cantidadCiudades; i++){
        let ciudad= prompt(`Ingrese el nombre de la ciudad ${i+1}: `);
        ciudades.push(ciudad);
    }
    let ciudadMasLarga = ciudades[0];
    for (let i=0; i<ciudades.length; i++){
        if (ciudades[i].length > ciudadMasLarga.length){
            ciudadMasLarga = ciudades[i];
        }
    }
    console.log("Las ciudades ingresadas son: " + ciudades.join(", "));
    alert("La ciudad con el nombre más largo es: " + ciudadMasLarga);
}
compararLongitudesCaracteres();

//5. Obtener iniciales de un cargo profesional.
function obtenerInicialesCargo(){
    let cargo = prompt("Ingrese un cargo profesional (por ejemplo, 'Ingeniero de Software'): ");
    let iniciales = "";
    for (let i=0; i<cargo.length; i++){
        if (i===0 || cargo[i-1]===" "){
            iniciales= iniciales + cargo[i];  
        }
    }
    console.log("El cargo profesional ingresado es: " + cargo);
    alert("Las iniciales del cargo profesional son: " + iniciales);
}
obtenerInicialesCargo();

//BLOQUE 2: VERSION CON ARREGLOS DEL BLOQUE 1.

//1. Dado un arreglo de frases publicitarias, contar caracteres de cada frase.
function contarCaracteresArreglo(){
    let cantidadFrases = parseInt(prompt("¿Cuántas frases publicitarias desea ingresar?: "));
    let frases = [];
    for  (let i=0; i<cantidadFrases; i++){
        let frase = prompt(`Ingrese la frase publicitaria ${i+1}: `);
        frases.push(frase);
    }
    for (let i=0; i<frases.length; i++){
        alert("Frase: " + frases[i] + " - Cantidad de caracteres: " + frases[i].length);
    }
}
contarCaracteresArreglo();

//2. Dado un arreglo de títulos y una vocal específica, contar cuántas veces aparece esa vocal en cada título.
function contarVocalEnTitulosArreglo(){
    let cantidadTitulos = parseInt(prompt("¿Cuántos títulos de películas desea ingresar?: "));
    let titulos = [];
    for (let i=0; i<cantidadTitulos; i++){
        let titulo = prompt(`Ingrese el título de la película ${i+1}: `);
        titulos.push(titulo);
    }
    let vocal = prompt("Ingrese una vocal para contar sus apariciones en los títulos:");
    for (let i=0; i<titulos.length; i++){
        let contador = 0;
        for (let j=0; j<titulos[i].length; j++){
            if (titulos[i][j]===vocal){
                contador++;
            }
        }
        alert(` Título: ${titulos[i]} - La vocal ${vocal} aparece ${contador} veces.`);
    }
}
contarVocalEnTitulosArreglo();

//3. Dado un arreglo de nombres de productos, invertir cada nombre y mostrar el resultado.
function invertirNombresProductosArreglo(){
    let cantidadProductos = parseInt(prompt("¿Cuántos nombres de productos desea ingresar?: "));
    let productos = [];
    for (let i=0; i<cantidadProductos; i++){
        let producto = prompt(`Ingrese el nombre del producto ${i+1}: `);
        productos.push(producto);
    }
    for (let i=0; i<productos.length; i++){
        let nombreInvertido = "";
        for (let j=productos[i].length-1; j>=0; j--){
            nombreInvertido += productos[i][j];
        }
    }
    alert(`Producto: ${productos[i]} - Nombre invertido: ${nombreInvertido}`);
}
invertirNombresProductosArreglo();

//4. Dado un arreglo de nombres de ciudades, encontrar y mostrar la ciudad con el nombre más largo.
function compararLongitudesCiudadesArreglo(){
    let cantidadCiudades = parseInt(prompt("¿Cuántas ciudades desea ingresar?: "));
    let ciudades = [];
    for (let i=0; i<cantidadCiudades; i++){
        let ciudad = prompt(`Ingrese el nombre de la ciudad ${i+1}: `);
        ciudades.push(ciudad);
    }
    let ciudadMasLarga = ciudades[0];
    for (let i=0; i<ciudades.length; i++){
        if (ciudades[i].length > ciudadMasLarga.length){
            ciudadMasLarga = ciudades[i];
        }
    }
    console.log("Las ciudades ingresadas son: " + ciudades.join(", "));
    alert("La ciudad con el nombre más largo es: " + ciudadMasLarga);
}
compararLongitudesCiudadesArreglo();

//5. Dado un arreglo de cargos profesionales, obtener y mostrar las iniciales de cada cargo.
function obtenerInicialesCargosArreglo(){
    let cantidadCargos = parseInt(prompt("¿Cuántos cargos profesionales desea ingresar?: "));
    let cargos = [];
    for (let i=0; i<cantidadCargos; i++){
        let cargo = prompt(`Ingrese el cargo profesional ${i+1}: `);
        cargos.push(cargo);
    } 
    for (let i=0; i<cargos.length; i++){
        let iniciales = "";
        for (let j=0; j<cargos[i].length; j++){
            if (j===0 || cargos[i][j-1]===" "){
                iniciales += cargos[i][j];
            }
        }
    }
    alert(`Cargo: ${cargos[i]} - Iniciales: ${iniciales}`);
}
obtenerInicialesCargosArreglo();

//BLOQUE 3: EJERCICIOS INDIVIDUALES CON CICLOS.

//1. Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
function promedioCalificacionesAltas(){
    let n = parseInt(prompt("¿Cuántas calificaciones desea ingresar?: "));
    let suma = 0;
    let contador = 0;
    for (let i=0; i<n; i++){
        let calificacion = parseFloat(prompt(`Ingrese la calificación ${i+1}: `));
        if (calificacion >= 70){
            suma += calificacion;
            contador++;
        }   
    }
    let promedio = suma / contador;
    alert("El promedio de las calificaciones mayores o iguales a 70 es: " + promedio.toFixed(2));
}
promedioCalificacionesAltas();

//2. Ingresar n números y contar cuántos son negativos.
function contarNumerosNegativos(){
    let cantidadNumeros = parseInt(prompt("¿Cuántos números desea ingresar?: "));
    let contador=0;
    for (let i=0; i<cantidadNumeros; i++){
        let numero = parseFloat(prompt(`Ingrese el número ${i+1}: `));
        if (numero < 0){
            contador++;
        }
    }
    alert("La cantidad de números negativos ingresados es: " + contador);
}
contarNumerosNegativos();

//3. Dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
function promedioEdadesMayoresMenores(){
    let cantidadPersonas = parseInt(prompt("¿Cuántas edades desea ingresar?: "));
    let sumaMayores = 0;
    let contadorMayores = 0;
    let promedioMayores = 0;
    let sumaMenores = 0;
    let contadorMenores = 0;
    let promedioMenores = 0;
    for (let i=0; i<cantidadPersonas; i++){
        let edad = parseInt(prompt(`Ingrese la edad de la persona ${i+1}: `));
        if (edad >= 18){
            sumaMayores += edad;
            contadorMayores++;
        } else {
            sumaMenores += edad;
            contadorMenores++;
        }   
    }
        promedioMayores = sumaMayores / contadorMayores;
        promedioMenores = sumaMenores / contadorMenores;
        console.log("Edades ingresadas: " + cantidadPersonas);
        console.log("Promedio de mayores de edad: " + promedioMayores.toFixed(2));
        console.log("Promedio de menores de edad: " + promedioMenores.toFixed(2));
}
promedioEdadesMayoresMenores();

//4. Dado un solo número, mostrar su tabla de multiplicar del 1 al 10.
function tablaMultiplicar(){
    let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar: "));
    let tabla = "";
    for (let i=1; i<=10; i++){
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert("Tabla de multiplicar del " + numero + ":\n\n" + tabla);
}
tablaMultiplicar();

//5. Ingresar n números y calcular el promedio de los números pares y de los números impares por separado.
function promedioParesImpares(){
    let cantidadNumeros = parseInt(prompt("¿Cuántos números desea ingresar?: "));
    let sumaPares = 0;
    let contadorPares = 0;
    let promedioPares = 0;
    let sumaImpares = 0;
    let contadorImpares = 0;
    let promedioImpares = 0;
    for (let i=0; i<cantidadNumeros; i++){
        let numero = parseInt(prompt(`Ingrese el número ${i+1}: `));
        if (numero % 2 === 0){
            sumaPares += numero;
            contadorPares++;
        } else {
            sumaImpares += numero;
            contadorImpares++;
        }   
    }
    promedioPares = sumaPares / contadorPares;
    promedioImpares = sumaImpares / contadorImpares;
    console.log("Números ingresados: " + cantidadNumeros);
    console.log("Promedio de números pares: " + promedioPares.toFixed(2));
    console.log("Promedio de números impares: " + promedioImpares.toFixed(2));
}
promedioParesImpares();

//BLOQUE 4: VERSION CON ARREGLOS DEL BLOQUE 3.

//1. Dado un arreglo de calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70.
function promedioCalificacionesAltasArreglo(){
    let cantidadCalificaciones = parseInt(prompt("¿Cuántas calificaciones desea ingresar?: "));
    let calificaciones = [];
    for (let i=0; i<cantidadCalificaciones; i++){
        let calificacion = parseFloat(prompt(`Ingrese la calificación ${i+1}: `));
        calificaciones.push(calificacion);
    }
    let suma = 0;
    let contador = 0;
    for (let i=0; i<calificaciones.length; i++){
        if (calificaciones[i] >= 70){
            suma += calificaciones[i];
        contador++;
        }   
    }
    let promedio = suma / contador;
    alert("El promedio de las calificaciones mayores o iguales a 70 es: " + promedio.toFixed(2));
}
promedioCalificacionesAltasArreglo();

//2. Dado un arreglo de números, contar cuántos son negativos.
function contarNumerosNegativosArreglo(){
    let cantidadNumeros = parseInt(prompt("¿Cuántos números desea ingresar?: "));
    let numeros = [];
    let contador = 0;
    for (let i=0; i<cantidadNumeros; i++){
        let numero = parseFloat(prompt(`Ingrese el número ${i+1}: `));
        numeros.push(numero);
    }
    for ( let i=0; i<numeros.length; i++){
        if (numeros[i]<0){
            contador++;
        }
    }
    alert("La cantidad de números negativos ingresados es: " + contador);
}
contarNumerosNegativosArreglo();

//3. Dado un arreglo de edades de un grupo de personas, obtener el promedio de los mayores de edad (≥ 18 años) y de los menores de edad (< 18 años).
function promedioEdadesMayoresMenoresArreglo(){
    let cantidadPersonas = parseInt(prompt("¿Cuántas edades desea ingresar?: "));
    let edades = [];
    sumaMayores =0;
    promedioMayores=0;
    contadorMayores=0;
    sumaMenores=0;
    promedioMenores=0;
    contadorMenores=0;
    for (let i=0; i<cantidadPersonas; i++){
        let edad = parseInt(prompt(`Ingrese la edad de la persona ${i+1}: `));
        edades.push(edad);
    }
    for (let i=0; i<edades.length; i++){
        if (edades[i]>=18){
            sumaMayores += edades[i];
            contadorMayores++;
        }else{
            sumaMenores += edades[i];
            contadorMenores++;
        }
    }
    promedioMayores = sumaMayores / contadorMayores;
    promedioMenores = sumaMenores / contadorMenores;
    console.log("Edades ingresadas: " + edades.join(", "));
    console.log("Promedio de mayores de edad: " + promedioMayores.toFixed(2));
    console.log("Promedio de menores de edad: " + promedioMenores.toFixed(2));
}
promedioEdadesMayoresMenoresArreglo();

//4. Dado un arreglo de numeros, mostrar la tabla de multiplicar del 1 al 10 para cada uno.
function tablaMultiplicarArreglo(){
    let cantidadNumeros = parseInt(prompt("¿Cuántos números desea ingresar?: "));
    let numeros = [];
    for (let i=0; i<cantidadNumeros; i++){
        let numero = parseInt(prompt(`Ingrese el número ${i+1}: `));
        numeros.push(numero);
    }
    for (let i=0; i<numeros.length; i++){
        let tabla = "";
        for (let j=1; j<=10; j++){
            tabla += `${numeros[i]} x ${j} = ${numeros[i] * j}\n`;
        }
        alert("Tabla de multiplicar del " + numeros[i] + ":\n\n" + tabla);
   }
}
tablaMultiplicarArreglo();

//5. Dado un arreglo de números, calcular el promedio de los números pares y de los números impares por separado.
function promedioParesImparesArreglo(){
    let cantidadNumeros = parseInt(prompt("¿Cuántos números desea ingresar?: "));
    let numeros = [];
    for (let i=0; i<cantidadNumeros; i++){
        let numero = parseInt(prompt(`Ingrese el número ${i+1}: `));
        numeros.push(numero);
    }
    let sumaPares =0;
    let promedioPares=0;
    let contadorPares=0;
    let sumaImpares=0;
    let promedioImpares=0;
    let contadorImpares=0;
    for (let i=0; i<numeros.length; i++){
        if (numeros[i]%2===0){
            sumaPares += numeros[i];
            contadorPares++;
        }else{
            sumaImpares += numeros[i];
            contadorImpares++;
        }
    }
    promedioPares= sumaPares / contadorPares;
    promedioImpares= sumaImpares / contadorImpares;
    console.log("Números ingresados: " + numeros.join(", "));
    console.log("Promedio de números pares: " + promedioPares.toFixed(2));
    console.log("Promedio de números impares: " + promedioImpares.toFixed(2));
}
promedioParesImparesArreglo();

//FIN PROGRAMA.



