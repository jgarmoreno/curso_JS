// Funciones que hacen RETURN para retornar valores. Se asigna a una variable.
function sumar(a,b) {
    return a + b;
}
const resultado = sumar(2,3);
console.log(resultado);

// Ejemplo avanzado
let total = 0;

function agregarCarrito(precio) {
    return total += precio; // Esto indica que siempre da el total, que luego se le añade el precio, para generar un nuevo total.
}

function calcularImpuesto(total) {
    return total * 1.16;
}

total = agregarCarrito(200);
total = agregarCarrito(100);

const totalPagar = calcularImpuesto(total);

console.log(total);
console.log(totalPagar);

console.log(`El total a pagar serían ${totalPagar} € impuestos incluidos`);