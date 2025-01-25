// BREAK Y CONTINUE
// Break
for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log(`Cinco`);
        break; // Rompe el for loop aquí
    }
    console.log(`Número ${i}`);
}

// Continue
for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log(`Cinco`);
        continue; // Con el continue, cuando i = 5, da la salida cinco pero no la de numero ${i}, pero continua después con el console log de abajo. Si no hubiera continue, habría de salida el 'Cinco' y el 'Numero 5'
    }
    console.log(`Número ${i}`);
}

// Uno de los elementos del carrito tiene descuento

const carrito = [
    {nombre: 'Monitor', precio : 200},
    {nombre: 'Audífonos', precio : 120},
    {nombre: 'Tablet', precio : 70, descuento: true},
    {nombre: 'Ratón', precio : 30},
    {nombre: 'Cable', precio : 2},
    {nombre: 'Altavoces', precio : 40}
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El producto ${carrito[i].nombre} tiene un descuento del 15%`);
        continue;
    }
    console.log(carrito[i].nombre);
}