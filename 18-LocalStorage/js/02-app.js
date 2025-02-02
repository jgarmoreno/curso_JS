// OBTENER DATOS LOCALSTORAGE
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const mesesJSON = localStorage.getItem('meses'); // Array
console.log(JSON.parse(mesesJSON)); // De JSON a su tipo

const productoJSON = localStorage.getItem('producto'); // objeto
console.log(JSON.parse(productoJSON)); // De JSON a su tipo