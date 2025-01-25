// Declaración de función
sumar(); // Muestra resultado en consola.
function sumar() {
    console.log(2+2);
}
// Para que se muestre en consola hay que llamarla.

// Expresión de función
sumar2(); // No muestra resultado en consola
const sumar2 = function() {
    console.log(3+3);
}

// Si colocamos la llamada de la función antes de la propia función, la declaración muestra resultado y la expresión no. Esto pasa por que JS se ejecuta en dos vueltas. La primera vuelta escanea todo el documento y registra todas las variables. La segunda vuelta ejecuta, y la función ya está registrada. En la segunda choca, porque la función en la primera vuelta se registra, y luego en la ejecución se ejecuta en sumar2() pero luego se vuelve a llamar y choca.
