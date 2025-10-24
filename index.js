//BLOQUE 1: EJERCICIOS DE CADENAS DE TEXTO

//1. Contar caracteres de una frase publicitaria
function contarCaracteres(){
    let frase = prompt("Ingrese una frase publicitaria:");
    let cantidadCaracteres = frase.length;
    console.log("La frase ingresa es: " + frase);
    alert("La cantidad de caracteres en la frase es: " + cantidadCaracteres);
}
contarCaracteres();

//2. Contar apariciones de una vocal en un titulo
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

//3. Invertir un nombre de producto
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

//4. Comparar longitudes de nombres de varias ciudades
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

//5. Obtener iniciales de un cargo profesional
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

//BLOQUE 2: VERSION CON ARREGLOS DEL BLOQUE 1

//1. Dado un arreglo de frases publicitarias, contar caracteres de cada frase
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

//