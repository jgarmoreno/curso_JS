// UNIR DOS OBJETOS // Object.assign({}, objeto1, objeto2) // Spread Operator
const producto = {
    nombre: 'Nintento Switch',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    longitud: '50cm'
}

console.log(producto);
console.log(medidas);

// Object Assign. También se puede como Object.assign(objeto1, objeto2).
const productoUnido = Object.assign({}, producto, medidas);
console.log(productoUnido);

// Spread Operator o Rest Operator
const productoFinal = {...producto, ...medidas};
console.log(productoFinal);
 