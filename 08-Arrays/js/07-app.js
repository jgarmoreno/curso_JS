// ELIMINAR elementos de un array. FORMA IMPERATIVA. // .pop() al final // shift() al inicio // .splice() posición concreta
const carrito = [];

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 130,
    disponible: true,
    fabricacion: {
        pais: 'China',
        ciudad: 'Pekín',
        fecha: '02/12/24'
    },
    medidas: {
        peso: '.734 kg',
        altura: '65 cm'
    }
};

const producto2 = {
    nombre: 'Tablet',
    precio: 110,
    disponible: true,
    fabricacion : {
        pais: 'Taiwan',
        ciudad: 'Taipéi',
        fecha: '18/09/24'
    },
    medidas: {
        peso: '.345 kg',
        altura: '24 cm'
    }
};

const producto3 = {
    nombre: 'AAA',
    precio: 110,
    disponible: true,
    fabricacion : {
        pais: 'sss',
        ciudad: 'ddd',
        fecha: '17/03/24'
    },
    medidas: {
        peso: '23 kg',
        altura: '55 cm'
    }
};

carrito.push(producto); // Añade al final del arreglo.
console.table(carrito);

carrito.unshift(producto2) // Añade al comienzo del arreglo.
console.table(carrito);

// Eliminar ÚLTIMO ELEMENTO de un arreglo
carrito.pop();
console.table(carrito);

// Eliminar PRIMER ELEMENTO de una arreglo
carrito.shift(carrito);
console.table(carrito);

// Añadamos de nuevo los arreglos...
carrito.push(producto, producto2, producto3);
console.table(carrito);

// Eliminar ELEMENTO EN CONCRETO de un arreglo
carrito.splice(0, 2) // (Llegar a la posición en concreto, cuántas posiciones quieres eliminar)
console.table(carrito); // Se pone en la posición 0, elimina el 0 y el 1, y deja el 2 (producto3)