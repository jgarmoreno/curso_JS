// Array METHODS. Modificar posteriormente los elementos al arreglo.
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

console.table(meses);

// Modificar elementos
meses[0] = 'Nuevo mes';
console.table(meses);

// Añadir un nuevo elemento
meses[7] = 'Agosto';
console.table(meses);

// Eliminar un elemento
delete meses[5];
console.table(meses);