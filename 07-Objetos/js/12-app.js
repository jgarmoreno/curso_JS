// OBJECT CONSTRUCTOR // 

// Object Literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 130,
    disponible: false
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Tablet', 230);
const producto3 = new Producto('Televisión', 290);

console.log(producto);
console.log(producto2);
console.log(producto3);