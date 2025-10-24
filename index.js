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
//6. 