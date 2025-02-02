// AGREGAR DATOS LOCALSTORAGE
// localStorage -> Dentro de window, puede lanzarse directamente
localStorage.setItem('nombre', 'Juan'); // (llave, valor)

// La diferencia entre localStorage y sessionStorage:
// - localStorage se mantiene durante más tiempo. Apago PC y los datos se mantienen.
// - sessionStorage se mantiene durante más tiempo. Se mantienen durante la sesión y se pierden al cerrar nav.

sessionStorage.setItem('nombre', 'José');




// Solo almacena STRINGS. Para convertir Objetos:
const producto = {
    nombre: 'Monitor de 34 pulgadas',
    precio: 300
}

const productoString = JSON.stringify(producto); // De su tipo a JSON para que acepte strings
console.log(productoString)

localStorage.setItem('producto', productoString)


// Para convertir arreglos
const meses = ['enero', 'febrero', 'marzo', 'abril'];
const mesesString = JSON.stringify(meses); // De su tipo a JSON para que acepte strings

localStorage.setItem('meses', mesesString);
