// Object .keys, .values y .entries
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 200,
    disponible: true
}

console.log(Object.keys(producto));

console.log(Object.keys(producto)[0]);

console.log(Object.values(producto)[2]);

console.log(Object.entries(producto)); // Te retorna un array, con diferentes arrays. Un array con nombre = 'Monitor..', otro array con precio = 200, y otro con disponible = true, todo guardado en un objeto

