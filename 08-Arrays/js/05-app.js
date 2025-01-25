// Array METHODS. Modificar elementos de un array mediante métodos, cuando no se conoce la posición. 
//.push() => Al final del array. // .unshift() => Al comienzo del array
// FORMA IMPERATIVA (modifica el array de carrito).
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
}

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
}

// Agregar al FINAL del arreglo => .push()
carrito.push(producto);
console.table(carrito);

carrito.push(producto2);
console.table(carrito);

// Agregar al PRINCIPIO del arreglo => .unshift()
const producto3 = {
    nombre: 'Móvil',
    precio: 78,
    disponible: true,
    fabricacion : {
        pais: 'Francia',
        ciudad: 'Toulouse',
        fecha: '11/02/24'
    },
    medidas: {
        peso: '.120 kg',
        altura: '17 cm'
    }
}
carrito.unshift(producto3);
console.table(carrito);