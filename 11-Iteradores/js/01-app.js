// Iteradores /  For loop
for(let i = 0; i <= 10; i++) {
    console.log(`Numero: ${i}`);
}

// Una cantidad diferente a 1
for(let i = 0; i <= 10; i+=5) {
    console.log(`Numero 2: ${i}`);
}

// Crear lógica para obtener pares e impares
for(let i = 1; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(`${i} -> Es par`);
    } else {
        console.log(`${i} -> Es impar`);
    }
}

// Recorrer carrito (ARRAY)
const carrito = [
    {nombre: 'Monitor', precio : 200},
    {nombre: 'Audífonos', precio : 120},
    {nombre: 'Tablet', precio : 70},
    {nombre: 'Ratón', precio : 30},
    {nombre: 'Cable', precio : 2},
    {nombre: 'Altavoces', precio : 40}
]

for(let i = 0; i < carrito.length; i++) {
    console.log(`Se ha seleccionado el producto ${carrito[i].nombre} con el precio ${carrito[i].precio} €.`)
}