// THIS // 
const producto = {
    nombre: 'PSP',
    precio: 130,
    disponible: false,
    mostrar: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} €.`)
    }
}
producto.mostrar();

const producto2 = {
    nombre: 'Ey',
    precio: 112,
    disponible: false,
    mostrar: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio} €.`)
    }
}
producto2.mostrar();

// Otra opción es destructuring, pero es mejor this porque se mantiene dentro del ámbito del objeto y se evita repetición del nombre de las variables:
const producto3 = {
    nombre: 'Nintento Switch',
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${nombre} tiene un precio de ${precio}`)
    }
}
const { nombre,precio } = producto3;

producto3.mostrarInfo(); // Como nombre y precio son propiedades dentro de producto, debe hacerse destructuring antes y convertirlos en variables.
