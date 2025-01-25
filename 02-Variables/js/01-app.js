// Inicializar una variable con un valor
var producto = 'Monitor de 24 pulgadas';
console.log(producto)

// Las variables se pueden reasignar
producto = 'Monitor de 19 pulgadas';
console.log(producto)

// JS es un lenguaje de tipo dinámico. No hay tipado de datos, a no ser que se use TypeScript.
producto = 20;
console.log(producto)

// Se pueden inicializar sin valor y asignarlo después
var disponible;
disponible = true;

// Inicializar múltiples variables
var categoria = 'Computadoras';
var marca = 'Marca Famosa';
var calificacion = 5;
// Si no quieres repetir var
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

// Las variables no pueden iniciar con números
var 99dias;
var dias99;
var 01_;
var _01;

var nombreProductoCategoria; // CamelCase. Más usado en JS
var nombre_producto; // SnakeCase o Underscore
var NombreProducto; // PascalCase